const CACHE_NAME = 'guia-ingles-cache-v63';
const FILES_TO_CACHE = [
  'index.html',
  'styles.css',
  'app.js',
  'service-worker.js',
  'data/topics.js',
  'data/flashcards.js',
  'data/quiz.js',
  'data/verbs.js',
  'data/exercises.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
    ))
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          if (!networkResponse || !networkResponse.ok) {
            return networkResponse;
          }

          return caches.open(CACHE_NAME).then(cache => {
            if (event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
    })
  );
});
