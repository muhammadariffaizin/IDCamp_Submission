const CACHE_NAME = 'enigmaticspwa-v1';
const urlsToCache = [
  "/",
  "/index.html",
  "/favicon.png",
  "/manifest.json",
  "/component/topnav.html",
  "/component/sidenav.html",
  "/component/footer.html",
  "/pages/home.html",
  "/pages/organization.html",
  "/pages/yelyel.html",
  "/pages/gallery.html",
  "/pages/about.html",
  "/css/materialize.min.css",
  "/css/style.css",
  "/js/materialize.min.js",
  "/js/script.js",
  "/img/home.jpg",
  "/img/home1.jpg",
  "/img/home2.jpg",
  "/img/home3.jpg",
  "/img/home4.jpg",
  "/img/home5.jpg",
  "/img/placeholder.png",
  "/img/Logo Square.png",
  "/img/Logo Only.png",
  "/img/Logo-72x72.png",
  "/img/Logo-96x96.png",
  "/img/Logo-144x144.png",
  "/img/Logo-256x256.png",
  "/img/Logo-384x384.png",
  "/img/Logo-512x512.png",
  "/img/slider1.jpg",
  "/img/slider2.jpg",
  "/img/slider3.jpg",
  "/img/slider4.jpg",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }
 
        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});