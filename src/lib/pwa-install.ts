'use client';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export const initPWAInstall = () => {
  if (typeof window === 'undefined') return;

  const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches;
  if (isAppInstalled) return;

  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    showInstallPromotion();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    const banner = document.querySelector<HTMLElement>('[data-pwa-banner]');
    banner?.remove();
  });
};

const showInstallPromotion = () => {
  const banner = document.createElement('div');
  banner.setAttribute('role', 'alert');
  banner.setAttribute('aria-live', 'polite');
  banner.className = 'fixed bottom-0 left-0 right-0 bg-primary text-white p-4 flex justify-between items-center z-50';
  banner.innerHTML = `
    <div>
      <p class="font-semibold">Install D4 Accountants App</p>
      <p class="text-sm">Get quick access to our services</p>
    </div>
    <div class="flex gap-2">
      <button 
        id="pwa-install-btn" 
        class="px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-white"
        aria-label="Install application"
      >Install</button>
      <button 
        id="pwa-dismiss-btn" 
        class="px-4 py-2 border border-white rounded-md hover:bg-primary-dark focus:ring-2 focus:ring-white"
        aria-label="Dismiss installation prompt"
      >Not now</button>
    </div>
  `;

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        deferredPrompt = null;
      }
      banner.remove();
    } catch (error) {
      console.error('PWA installation error:', error);
    }
  };

  banner.querySelector('#pwa-install-btn')?.addEventListener('click', handleInstall);
  banner.querySelector('#pwa-dismiss-btn')?.addEventListener('click', () => banner.remove());

  if (!document.querySelector('[data-pwa-banner]')) {
    banner.setAttribute('data-pwa-banner', 'true');
    document.body.appendChild(banner);
  }
};