// self.addEventListener("install", e => {
//     console.log("Install!");
// });

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then((cache) => {
            return cache.addAll(["./", "manifest.json", "Index.html", "ingame.html", "timer.html", "css/end.css", "css/general.css", "css/index.css", "css/ingame.css","css/timer.css",  "js/index.js", "js/timer.js","js/variables.js", "src/icon/icon-72x72.png", "src/icon/icon-144x144.png", "src/icon/icon-192x192.png"]);
        })
    );
    console.log("install dcode");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
    console.log("Intercepting fetch request for: ${e.request.url}");
});


