import { DispatchWithoutAction, useCallback, useEffect, useState } from 'react';
import { useWebApp } from './core';

/**
 * This hook provided isExpanded state, and expand() handle
 * You have to look original description in {@link telegram!WebApp} for more information
 *
 * `isExpanded` can be `undefined`
 *
 * ```tsx
 * import { useExpand } from "@vkruglikov/react-telegram-web-app";
 *
 * const [isExpanded, expand] = useExpand();
 * const handleClick = () => !isExpanded && expand();
 *
 * <button onClick={handleClick}>
 *     {showTextWhenScreenExpanded && 'expanded' : 'to expand'}
 * </button>
 * ```
 *
 * @privateRemarks
 * Api doesn't provide event for listening isExpanded, so we use
 * viewportChanged, but it is an unsafe way
 *
 * @group Hooks
 */
const useFullscreen = (): readonly [boolean | undefined, DispatchWithoutAction] => {
  const WebApp = useWebApp();
  const [isFullscreen, setIsFullscreen] = useState(WebApp?.isFullscreen);

  useEffect(() => {
    if (!WebApp) return;
    const handleEvent = (payload: { isStateStable: boolean }) => {
      if (payload.isStateStable) {
        setIsFullscreen(WebApp.isFullscreen);
      }
    };

    WebApp.onEvent('viewportChanged', handleEvent);
    return () => WebApp.offEvent('viewportChanged', handleEvent);
  }, [WebApp]);

  const handleFullScreen = useCallback(() => WebApp?.requestFullscreen?.(), [WebApp]);

  return [isFullscreen, handleFullScreen] as const;
};

export default useFullscreen;
