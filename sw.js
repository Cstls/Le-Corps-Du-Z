/* Le Corps Du Z : mise en cache pour un usage hors ligne */
const VERSION='corps-du-z-v3';
const FILES=["./", "index.html", "manifest.webmanifest", "three.min.js", "OrbitControls.js", "model.json", "model.b64.txt", "arttree.b64.txt", "axial.b64.txt", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  /* polices Google : mises en cache à la première utilisation */
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(VERSION).then(c=>c.match(req).then(r=>r||fetch(req).then(n=>{c.put(req,n.clone());return n;}).catch(()=>r))));return;
  }
  if(url.origin!==location.origin)return;
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(n=>{if(n.ok){const cl=n.clone();caches.open(VERSION).then(c=>c.put(req,cl));}return n;})));
});
