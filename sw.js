// Saves the app on the phone so it opens with no internet.
const VERSION = "shotlist-v4";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Offline first: answer from the saved copy, refresh it in the background when there's signal.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // New video ideas: always try the internet first so fresh ones show up, fall back to the saved copy offline
  if (new URL(e.request.url).pathname.endsWith("/ai-ideas.json")) {
    e.respondWith(caches.open(VERSION).then(c => fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; })
      .catch(() => c.match(e.request, {ignoreSearch:true}).then(r => r || new Response("[]", {headers:{"Content-Type":"application/json"}})))));
    return;
  }
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(e.request, {ignoreSearch: true});
    const fresh = fetch(e.request).then(r => { if (r.ok) cache.put(e.request, r.clone()); return r; }).catch(() => null);
    return hit || (await fresh) || cache.match("index.html");
  }));
});
