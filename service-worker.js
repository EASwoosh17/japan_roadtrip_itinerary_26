const CACHE_NAME='japan-roadtrip-public-safe-v3-custom-icon';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-192.png", "./icons/icon-maskable-512.png", "./icons/favicon.ico", "./icons/favicon-16.png", "./icons/favicon-32.png"];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>Promise.allSettled(ASSETS.map(asset=>cache.add(asset)))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{
    const copy=resp.clone();
    if(new URL(event.request.url).origin===location.origin){caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
    return resp;
  }).catch(()=>caches.match('./index.html'))));
});
