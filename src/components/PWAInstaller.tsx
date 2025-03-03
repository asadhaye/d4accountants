'use client';

import { useEffect } from 'react';
import { initPWAInstall } from '@/lib/pwa-install';

export function PWAInstaller() {
  useEffect(() => {
    initPWAInstall();
  }, []);

  return null;
}