const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const { EventEmitter } = require("node:events");

class FakeChannel {
  static rooms = new Map();
  constructor(name) {
    this.name = name;
    const room = FakeChannel.rooms.get(name) || new Set();
    room.add(this);
    FakeChannel.rooms.set(name, room);
  }
  postMessage(data) {
    for (const channel of FakeChannel.rooms.get(this.name)) {
      if (channel !== this) channel.onmessage?.({ data });
    }
  }
  close() { FakeChannel.rooms.get(this.name)?.delete(this); }
}

class FakeConnection extends EventEmitter {
  constructor() { super(); this.open = true; this.sent = []; }
  send(value) { this.sent.push(value); }
}

class FakePeer extends EventEmitter {
  constructor() { super(); FakePeer.instances.push(this); queueMicrotask(() => this.emit("open", `room-${FakePeer.instances.length}`)); }
  connect() { const connection = new FakeConnection(); queueMicrotask(() => connection.emit("open")); return connection; }
  destroy() {}
}
FakePeer.instances = [];

function makeWindow() {
  const target = new EventTarget();
  target.window = target;
  target.Peer = FakePeer;
  target.BroadcastChannel = FakeChannel;
  target.CustomEvent = class CustomEvent extends Event { constructor(type, options) { super(type); this.detail = options.detail; } };
  return target;
}

function load(window) {
  vm.runInNewContext(fs.readFileSync("collaboration.js", "utf8"), { window, CustomEvent: window.CustomEvent, queueMicrotask });
  return window.ShotSync;
}

(async () => {
  const hostWindow = makeWindow();
  const guestWindow = makeWindow();
  const host = load(hostWindow);
  const guest = load(guestWindow);
  host.configure({ getState: () => ({ savedAt: 1, cats: [] }) });
  guest.configure({ getState: () => ({ savedAt: 1, cats: [] }) });

  const room = await host.host();
  await guest.join(room);

  let received;
  guest.onState(value => { received = value; });
  host.publish({ savedAt: 2, cats: [{ cat: "Trip", videos: [] }] });
  assert.equal(received.savedAt, 2, "BroadcastChannel shares updates between same-device sessions");

  const connection = new FakeConnection();
  FakePeer.instances[0].emit("connection", connection);
  connection.emit("open");
  assert.equal(connection.sent[0].data.savedAt, 1, "A new peer receives the host snapshot");

  host.stop();
  guest.stop();
  console.log("collaboration tests passed");
})().catch(error => { console.error(error); process.exitCode = 1; });
