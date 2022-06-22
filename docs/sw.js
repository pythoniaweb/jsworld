/*
 Probably one of the simplest functional service workers
 
 Version: 0.0.2
*/

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-assets').then(cache => 
      {
        return cache.addAll([
          'index.html',
          '/',
          '/assets',
          '/assets/css',
          '/assets/favicom',
          '/assets/js',
          '/images',
          '404.html',
          'status.html',
        ])
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
