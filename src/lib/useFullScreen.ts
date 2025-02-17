import { DispatchWithoutAction, useCallback, useState } from 'react';
import { viewport } from '@telegram-apps/sdk';

/**
 * This hook provides the `isFullscreen` state and a `toggleFullscreen` handle.
 *
 * `isFullscreen` can be `undefined` until the SDK state is known.
 *
 * ```tsx
 * import { useFullscreen } from "./useFullscreen";
 *
 * const [isFullscreen, toggleFullscreen] = useFullscreen();
 * const handleClick = () => !isFullscreen && toggleFullscreen();
 *
 * <button onClick={handleClick}>
 *     {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
 * </button>
 * ```
 *
 * @privateRemarks
 * SDK does not provide a direct event to listen for fullscreen changes, so manual toggling is handled.
 *
 * @group Hooks
 */
const useFullscreen = (): readonly [boolean | undefined, DispatchWithoutAction] => {
  const [isFullscreen, setIsFullscreen] = useState(viewport.isFullscreen());

  const toggleFullscreen = useCallback(async () => {
    if (viewport.isFullscreen()) {
      if (viewport.exitFullscreen.isAvailable()) {
        await viewport.exitFullscreen();
      }
    } else {
      if (viewport.requestFullscreen.isAvailable()) {
        await viewport.requestFullscreen();
      }
    }
    setIsFullscreen(viewport.isFullscreen());
  }, []);

  return [isFullscreen, toggleFullscreen] as const;
};

export default useFullscreen;
