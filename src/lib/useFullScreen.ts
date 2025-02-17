import { useEffect, useState } from 'react';
import { viewport } from '@telegram-apps/sdk';

interface UseViewportFullscreen {
  isFullscreen: boolean;
  isMounted: boolean;
  enableFullscreen: () => Promise<void>;
  disableFullscreen: () => Promise<void>;
  mountViewport: () => void;
  unmountViewport: () => void;
}

export const useViewportFullscreen = (): UseViewportFullscreen => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (viewport.mount.isAvailable()) {
      viewport.mount();
      setIsMounted(true);
    }

    return () => {
      if (viewport.isMounted()) {
        viewport.unmount();
        setIsMounted(false);
      }
    };
  }, []);

  const enableFullscreen = async () => {
    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen();
      setIsFullscreen(viewport.isFullscreen());
    }
  };

  const disableFullscreen = async () => {
    if (viewport.exitFullscreen.isAvailable()) {
      await viewport.exitFullscreen();
      setIsFullscreen(viewport.isFullscreen());
    }
  };

  const mountViewport = () => {
    if (!isMounted && viewport.mount.isAvailable()) {
      viewport.mount();
      setIsMounted(true);
    }
  };

  const unmountViewport = () => {
    if (isMounted) {
      viewport.unmount();
      setIsMounted(false);
    }
  };

  return {
    isFullscreen,
    isMounted,
    enableFullscreen,
    disableFullscreen,
    mountViewport,
    unmountViewport,
  };
};
