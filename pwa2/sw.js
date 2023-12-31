const cacheName = 'hello-pwa';
let filesToCache = [
  '/',
  'index.html',
  'css/style.css',
  'js/main.js'
];

// Start the service worker and cache all of the app's content
self.addEventListener('install', e => {
    e.waitUntil((async () => {
      try {
        const cache = await caches.open(cacheName);
        return cache.addAll(filesToCache);
      } catch (error) {
        console.error('Failed to cache files:', error);
      }
    })());
  });
  
  // Serve cached content when offline
  self.addEventListener('fetch', e => {
    e.respondWith((async () => {
      try {
        const response = await caches.match(e.request);
        return response || fetch(e.request);
      } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;
      }
    })());
  });
  

  
  