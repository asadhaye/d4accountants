// Service Worker with Background Sync
const CACHE_NAME = "offline-leads-v1";
const SYNC_TAG = "sync-leads";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/offline", "/offline.png"]);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  if (
    event.request.method === "POST" &&
    event.request.url.includes("/api/leads")
  ) {
    // Clone the request to use it in the background sync
    const promiseChain = fetch(event.request.clone()).catch((err) => {
      return event.waitUntil(
        (async () => {
          try {
            // Store the failed request in IndexedDB
            const db = await openDB();
            const tx = db.transaction("failed-requests", "readwrite");
            const store = tx.objectStore("failed-requests");
            await store.add({
              url: event.request.url,
              method: event.request.method,
              headers: Array.from(event.request.headers.entries()),
              body: await event.request.clone().text(),
              timestamp: Date.now(),
            });
            await tx.complete;

            // Register for background sync
            if ("sync" in self.registration) {
              await self.registration.sync.register(SYNC_TAG);
              console.log("Background sync registered");
            } else {
              console.log("Background sync not supported");
            }
          } catch (error) {
            console.error("Error queueing failed request:", error);
          }
        })(),
      );
    });

    event.respondWith(
      promiseChain
        .then((response) => response)
        .catch(() => {
          // Return a response indicating the request will be retried
          return new Response(
            JSON.stringify({
              error:
                "You are currently offline. Your submission will be sent when you're back online.",
            }),
            {
              status: 503,
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store",
              },
            },
          );
        }),
    );
  } else {
    // Handle other requests with standard offline fallback
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          if (event.request.mode === "navigate") {
            return caches.match("/offline");
          }
          return new Response("", {
            status: 408,
            statusText: "Request timeout",
          });
        });
      }),
    );
  }
});

self.addEventListener("sync", (event) => {
  if (event.tag === SYNC_TAG) {
    event.waitUntil(
      (async () => {
        try {
          const db = await openDB();
          const tx = db.transaction("failed-requests", "readwrite");
          const store = tx.objectStore("failed-requests");
          const requests = await store.getAll();

          console.log(`Retrying ${requests.length} failed requests`);

          // Retry all failed requests
          const retryPromises = requests.map(async (request) => {
            try {
              const response = await fetch(
                new Request(request.url, {
                  method: request.method,
                  headers: new Headers(request.headers),
                  body: request.body,
                }),
              );

              if (response.ok) {
                // Remove successful request from the store
                await store.delete(request.timestamp);
                console.log("Successfully retried request:", request.url);
              } else {
                console.error(
                  "Failed to retry request:",
                  request.url,
                  response.status,
                );
              }

              return response;
            } catch (error) {
              console.error(
                "Background sync failed for request:",
                request.url,
                error,
              );
              return null;
            }
          });

          await Promise.all(retryPromises);
          await tx.complete;
          console.log("Background sync completed");
        } catch (error) {
          console.error("Error in background sync:", error);
        }
      })(),
    );
  }
});

// IndexedDB helper function
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("leads-sync-db", 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("failed-requests")) {
        db.createObjectStore("failed-requests", { keyPath: "timestamp" });
      }
    };
  });
}
