'use client';

import { useEffect } from 'react';
import { initPWAInstall } from '@/lib/pwa-install';

export default function PWAInstaller() {
  useEffect(() => {
    initPWAInstall();
  }, []);

  return null;
}