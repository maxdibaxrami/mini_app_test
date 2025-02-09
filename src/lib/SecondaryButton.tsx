import { useContext, useEffect, useId } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';

/**
 * The props type of {@link SecondaryButton | `SecondaryButton`}.
 */
export interface SecondaryButtonProps {
  /**
   * Current button text
   * @defaultValue Set to `CONTINUE` by default
   */
  text?: string;
  /**
   * The button progress state indicator.
   * @defaultValue  Set to `false` by default
   */
  progress?: boolean;
  /**
   * Just an alias on the {@link SecondaryButtonProps.disabled}
   * @deprecated Use {@link SecondaryButtonProps.disabled} instead, will be removed
   * @ignore
   */
  disable?: boolean;
  /**
   * The button disable state.
   * @defaultValue Set to `false` y defaults
   */
  disabled?: boolean;
  /** The button press event handler */
  onClick?: () => void;
  /**
   * Current button color.
   * @defaultValue Set to themeParams.button_color by default
   */
  color?: string;
  /**
   * Current button text color
   * @defaultValue Set to themeParams.button_text_color by default
   */
  textColor?: string;

  position?:string;
}

/**
 * Renders a {@link telegram!SecondaryButton} component in React app as {@link react!Component}
 *
 * ```tsx
 * import { MainButton } from "@vkruglikov/react-telegram-web-app";
 *
 * <MainButton
 *     text="CLICK ME"
 *     onClick={() => console.log('Hello, I am button!')}
 * />
 * ```
 * @param props
 * @group React Components
 */
const SecondaryButton = ({
  text = 'CONTINUE',
  progress = false,
  disable: disable_old,
  disabled: disable_new = false,
  color,
  textColor,
  position,
  onClick,
}: SecondaryButtonProps): null => {

  const system = useContext(systemContext);
  const buttonId = useId();
  const WebApp = useWebApp();
  const SecondaryButton = WebApp?.SecondaryButton;
  const themeParams = WebApp?.themeParams;
  const disabled = disable_old || disable_new;

  useEffect(() => {
    SecondaryButton?.setParams({
      color: color || themeParams?.button_color || '#fff',
      position:position,
      
    });
  }, [color, themeParams, SecondaryButton]);

  useEffect(() => {
    SecondaryButton?.setParams({
      text_color: textColor || themeParams?.button_text_color || '#000',
    });
  }, [SecondaryButton, themeParams, textColor]);

  useEffect(() => {
    SecondaryButton?.setText(text);
  }, [text, SecondaryButton]);

  useEffect(() => {
    if (disabled) {
        SecondaryButton?.disable();
    } else if (!disabled) {
        SecondaryButton?.enable();
    }
  }, [disabled, SecondaryButton]);

  useEffect(() => {
    if (progress) {
        SecondaryButton?.showProgress(false);
    } else if (!progress) {
        SecondaryButton?.hideProgress();
    }
  }, [progress, SecondaryButton]);

  useEffect(() => {
    if (!onClick) {
      return;
    }

    SecondaryButton?.onClick(onClick);
    return () => {
        SecondaryButton?.offClick(onClick);
    };
  }, [onClick, SecondaryButton]);

  useSmoothButtonsTransition({
    show: SecondaryButton?.show,
    hide: SecondaryButton?.hide,
    currentShowedIdRef: system.SecondaryButton,
    id: buttonId,
  });

  return null;
};

export default SecondaryButton;
