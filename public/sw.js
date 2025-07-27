const CACHE_NAME = 'tupinamba-v1';
const urlsToCache = [
  '/',
  '/historia',
  '/tupinamba-logo-horizontal.svg',
  '/bg-hero.webp',
  '/altar.webp',
  '/bg-folhas.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});