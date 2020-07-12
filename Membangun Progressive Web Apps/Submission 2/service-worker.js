const CACHE_NAME = 'getdeball-v17';
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/favicon.png",
  "/images/icons/icon-32x32.png",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/images/logos/2000.svg",
  "/images/logos/2001.svg",
  "/images/logos/2002.svg",
  "/images/logos/2003.svg",
  "/images/logos/2013.svg",
  "/images/logos/2014.svg",
  "/images/logos/2015.svg",
  "/images/logos/2016.svg",
  "/images/logos/2017.svg",
  "/images/logos/2018.svg",
  "/images/logos/2019.svg",
  "/images/logos/2021.svg",
  "/match.html",
  "/components/nav.html",
  "/components/pages/home.html",
  "/components/pages/about.html",
  "/components/pages/live.html",
  "/components/pages/saved.html",
  "/styles/style.css",
  "/styles/materialize.min.css",
  "/styles/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
  "/scripts/register.js",
  "/scripts/lib/materialize.min.js",
  "/scripts/lib/idb.js",
  "/scripts/data/dataApi.js",
  "/scripts/data/dataCache.js",
  "/scripts/data/dataDb.js",
  "/scripts/data/dataLogo.js",
  "/scripts/helper/date.js",
  "/scripts/helper/preloader.js",
  "/scripts/loader/main.js",
  "/scripts/loader/loadLeague.js",
  "/scripts/loader/loadMatch.js",
  "/scripts/loader/loadNav.js",
  "/scripts/loader/loadPage.js",
  "/service-worker.js"
];
 
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  const base_url = "https://api.football-data.org/v2/";
  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request).then((response) => {
          cache.put(event.request.url, response.clone());
          console.log(event.request.url);
          return response;
        })
      })
    );
  } else {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((response) => {
            return response || fetch (event.request);
        })
    )
}
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`ServiceWorker: cache ${cacheName} dihapus`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  var body;
  if (event.data) {
    body = `${event.data.text()} - GetdeBall`;
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: './images/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});