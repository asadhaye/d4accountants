import { useState, useEffect } from "react";

export function useBannerState(storageKey: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem(storageKey);
    if (!value) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const hide = () => setIsVisible(false);

  return { isVisible, hide };
}