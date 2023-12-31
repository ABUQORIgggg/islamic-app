const CACHE_NAME = 'your-app-cache';
const urlsToCache = [
  '/index.html',
  './style.css',
  './script.js',
  './image/512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
