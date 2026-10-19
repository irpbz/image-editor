// Service Worker for Image Editor
const CACHE_NAME = 'image-editor-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/css/fontawesome.min.css',
  './assets/css/introjs.min.css',
  './assets/css/cropper.min.css',
  './assets/js/tailwind.js',
  './assets/js/intro.min.js',
  './assets/js/compressor.min.js',
  './assets/js/jszip.min.js',
  './assets/js/FileSaver.min.js',
  './assets/js/cropper.min.js',
  './assets/webfonts/fa-solid-900.woff2',
  './assets/webfonts/fa-regular-400.woff2',
  './assets/webfonts/fa-brands-400.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
