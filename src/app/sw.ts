/// <reference lib="webworker" />

import type { PrecacheEntry, RuntimeCaching, SerwistPlugin } from "serwist";
import { Serwist, CacheFirst, NetworkFirst, StaleWhileRevalidate } from "serwist";
import { ExpirationPlugin } from "workbox-expiration";

declare global {
  interface ServiceWorkerGlobalScope {
    __SW_MANIFEST: (PrecacheEntry | string)[];
  }
}

declare let self: ServiceWorkerGlobalScope & typeof globalThis;

self.skipWaiting();
self.addEventListener("activate", () => self.clients.claim());

// Helper function to create properly typed plugins
const createExpirationPlugin = (config: { maxEntries: number; maxAgeSeconds: number }): SerwistPlugin => ({
  ...new ExpirationPlugin(config),
  cacheDidUpdate: async () => undefined,
  cachedResponseWillBeUsed: async ({ cachedResponse }) => {
    return cachedResponse;
  },
  cacheKeyWillBeUsed: async ({ request }) => request.url,
  cacheWillUpdate: async ({ response }) => response,
  handlerWillStart: async () => undefined,
  handlerWillRespond: async ({ response }) => response,
  handlerDidRespond: async () => undefined,
  handlerDidComplete: async () => undefined,
  handlerDidError: async () => undefined,
});

// Define ExpirationPlugin configurations
const fontExpirationPlugin = createExpirationPlugin({
  maxEntries: 4,
  maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
});

const imageExpirationPlugin = createExpirationPlugin({
  maxEntries: 50,
  maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
});

const staticExpirationPlugin = createExpirationPlugin({
  maxEntries: 32,
  maxAgeSeconds: 24 * 60 * 60, // 1 day
});

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  precacheOptions: {
    cleanupOutdatedCaches: true,
    concurrency: 10,
    ignoreURLParametersMatching: [],
  },
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      matcher: ({ request }: { request: Request }) => request.url.startsWith("https://fonts.googleapis.com"),
      handler: new CacheFirst({
        cacheName: "google-fonts",
        plugins: [fontExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i.test(request.url),
      handler: new StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [fontExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i.test(request.url),
      handler: new StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [imageExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => request.url.includes("/_next/image"),
      handler: new StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [imageExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\.(?:mp3|wav|ogg)$/i.test(request.url),
      handler: new CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [staticExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\.(?:js)$/i.test(request.url),
      handler: new StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [staticExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\.(?:css)$/i.test(request.url),
      handler: new StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [staticExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\/_next\/data\/.+\/.+\.json$/i.test(request.url),
      handler: new StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [staticExpirationPlugin],
      }),
    },
    {
      matcher: ({ request }: { request: Request }) => /\.(?:json|xml|csv)$/i.test(request.url),
      handler: new NetworkFirst({
        cacheName: "static-data-assets",
      }),
    },
  ] as RuntimeCaching[],
});

self.addEventListener("push", (event: PushEvent) => {
  const data = JSON.parse(event?.data?.text() || "{}");
  event?.waitUntil(
    self.registration.showNotification(data.title || "New Notification", {
      body: data.message || "",
      icon: "/icons/icon-192x192.png",
    })
  );
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const client = clientList[0] as WindowClient;
      if (client) {
        return client.focus();
      }
      return self.clients.openWindow("/");
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/sync") && event.request.method === "POST") {
    event.respondWith(fetch(event.request));
  }
});

serwist.addEventListeners();
