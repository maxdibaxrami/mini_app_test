import { viewport } from '@telegram-apps/sdk';

export const useFullscreenToggle = () => {
  const toggleFullscreen = async () => {
    if (viewport.isFullscreen()) {
      if (viewport.exitFullscreen.isAvailable()) {
        await viewport.exitFullscreen();
      }
    } else {
      if (viewport.requestFullscreen.isAvailable()) {
        await viewport.requestFullscreen();
      }
    }
  };

  return toggleFullscreen;
};
