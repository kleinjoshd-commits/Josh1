// Offline-first service worker — cache-first for the app shell, network passthrough for everything else.
// NOTE: '/community/' and '/community' are HTTP redirects to index.html on the host.
// Navigations are therefore answered with the cached index.html directly — a cached
// *redirected* response served to a navigation is a network error in Chrome.
const CACHE = 'mpe-shell-v4';
const ASSETS = ['./index.html', './app.js', './config.js', './i18n/strings.js', './manifest.webmanifest', './assets/mpe-logo.png', './assets/icon.svg', './assets/icon-192.png', './assets/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  // Any in-scope navigation (/community, /community/, /community/index.html) gets the app shell.
  if(e.request.mode === 'navigate'){
    e.respondWith(caches.match('./index.html').then(hit => hit || fetch('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
    // Never cache redirected or error responses — a cached redirect poisons navigations.
    if(res.ok && !res.redirected){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match('./index.html'))));
});
