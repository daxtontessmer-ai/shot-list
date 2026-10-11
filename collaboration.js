(function (global) {
  const listeners = new Set();
  const peers = new Set();
  let peer = null;
  let channel = null;
  let mode = "offline";
  let getState = () => null;

  function emit(status, detail = "") {
    mode = status;
    global.dispatchEvent(new CustomEvent("shotsyncstatus", { detail: { status, detail } }));
  }

  function receive(payload, source) {
    if (!payload || payload.type !== "state" || !payload.data) return;
    listeners.forEach(fn => fn(payload.data));
    if (mode === "hosting") {
      peers.forEach(conn => {
        if (conn !== source && conn.open) conn.send(payload);
      });
    }
  }

  function openLocalChannel(code) {
    if (channel) channel.close();
    channel = typeof global.BroadcastChannel === "function" ? new global.BroadcastChannel(`shotlist:${code}`) : null;
    if (channel) channel.onmessage = event => receive(event.data, channel);
  }

  function watch(conn, sendInitial) {
    peers.add(conn);
    conn.on("open", () => {
      emit(mode, `${peers.size} friend${peers.size === 1 ? "" : "s"} connected`);
      if (sendInitial) conn.send({ type: "state", data: getState() });
    });
    conn.on("data", payload => receive(payload, conn));
    conn.on("close", () => {
      peers.delete(conn);
      emit(mode, `${peers.size} friend${peers.size === 1 ? "" : "s"} connected`);
    });
    conn.on("error", () => emit("error", "Connection interrupted"));
  }

  function createPeer() {
    if (!global.Peer) throw new Error("Live sharing could not load");
    if (peer) peer.destroy();
    peers.clear();
    peer = new global.Peer();
    peer.on("error", error => emit("error", error.type || "Connection failed"));
    return peer;
  }

  global.ShotSync = {
    configure(options) { getState = options.getState; },
    onState(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    host() {
      const p = createPeer();
      p.on("connection", conn => watch(conn, true));
      return new Promise((resolve, reject) => {
        p.on("open", id => { openLocalChannel(id); emit("hosting", "Waiting for friends"); resolve(id); });
        p.on("error", reject);
      });
    },
    join(code) {
      const p = createPeer();
      openLocalChannel(code.trim());
      return new Promise((resolve, reject) => {
        p.on("open", () => {
          const conn = p.connect(code.trim(), { reliable: true });
          watch(conn, false);
          conn.on("open", () => { emit("joined", "Connected to trip"); resolve(); });
          conn.on("error", reject);
        });
        p.on("error", reject);
      });
    },
    publish(data) {
      const payload = { type: "state", data };
      if (channel) channel.postMessage(payload);
      peers.forEach(conn => { if (conn.open) conn.send(payload); });
    },
    stop() {
      if (peer) peer.destroy();
      peer = null;
      if (channel) channel.close();
      channel = null;
      peers.clear();
      emit("offline", "");
    },
    get mode() { return mode; }
  };
})(window);
