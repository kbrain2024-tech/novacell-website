const CACHE = "novacell-reflex-therapy-v36-official-en-maps";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=36",
  "./program-data.js?v=36",
  "./app.js?v=36",
  "./manifest.webmanifest",
  "./assets/foot-sole-map.webp",
  "./assets/foot-top-map.webp",
  "./assets/hand-palm-map.webp",
  "./assets/hand-back-map.webp",
  "./assets/foot-sole-map-en.png",
  "./assets/foot-top-map-en.png",
  "./assets/hand-palm-map-en.png",
  "./assets/hand-back-map-en.png",
  "./assets/foot-sole-right-en.png",
  "./assets/foot-sole-left-en.png",
  "./assets/foot-top-right-en.png",
  "./assets/foot-top-left-en.png",
  "./assets/hand-palm-right-en.png",
  "./assets/hand-palm-left-en.png",
  "./assets/hand-back-right-en.png",
  "./assets/hand-back-left-en.png",
  "./assets/reflex-hero-guide.webp",
  "./assets/system-cardio.webp",
  "./assets/system-digestive.webp",
  "./assets/system-endocrine.webp",
  "./assets/system-musculoskeletal.webp",
  "./assets/system-nervous.webp",
  "./assets/system-respiratory.webp",
  "./assets/system-reproductive.webp",
  "./assets/system-urinary.webp"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS).catch(() => {}))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Network-First for HTML documents, scripts, styles to guarantee instant deployment
self.addEventListener("fetch", event => {
  const url = event.request.url;
  const isCodeOrDoc = event.request.mode === "navigate" ||
                      event.request.destination === "document" ||
                      url.includes(".js") ||
                      url.includes(".css") ||
                      url.includes("manifest");

  if (isCodeOrDoc) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && event.request.method === "GET") {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
