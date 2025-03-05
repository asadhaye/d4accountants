import { type PrecacheEntry } from '@serwist/precaching';
/// <reference lib="webworker" />

declare interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  __SW_MANIFEST: PrecacheEntry[];
}