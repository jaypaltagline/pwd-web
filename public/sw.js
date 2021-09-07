let cacheData = "appV1";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                // add path if want to offline this changes 
                // get url from  network tab catch data 
                // "/pwd-demo/static/media/tenor.706124a2.gif",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log(`fetch`)
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) return result;
            })
        );
    }
});