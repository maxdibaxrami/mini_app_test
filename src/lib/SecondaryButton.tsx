import { useContext, useEffect, useId } from 'react';
import { useWebApp, useSmoothButtonsTransition, systemContext } from './core';

/**
 * The props type of {@link secondaryButton | `secondaryButton`}.
 */
export interface secondaryButtonProps {
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
   * Just an alias on the {@link secondaryButtonProps.disabled}
   * @deprecated Use {@link secondaryButtonProps.disabled} instead, will be removed
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
 * Renders a {@link telegram!secondaryButton} component in React app as {@link react!Component}
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
}: secondaryButtonProps): null => {

  const system = useContext(systemContext);
  const buttonId = useId();
  const WebApp = useWebApp();
  const secondaryButton = WebApp?.secondaryButton;
  const themeParams = WebApp?.themeParams;
  const disabled = disable_old || disable_new;

  useEffect(() => {
    secondaryButton?.setParams({
      color: color || themeParams?.button_color || '#fff',
      position:position,
      
    });
  }, [color, themeParams, secondaryButton]);

  useEffect(() => {
    secondaryButton?.setParams({
      text_color: textColor || themeParams?.button_text_color || '#000',
    });
  }, [secondaryButton, themeParams, textColor]);

  useEffect(() => {
    secondaryButton?.setText(text);
  }, [text, secondaryButton]);

  useEffect(() => {
    if (disabled) {
        secondaryButton?.disable();
    } else if (!disabled) {
        secondaryButton?.enable();
    }
  }, [disabled, secondaryButton]);

  useEffect(() => {
    if (progress) {
        secondaryButton?.showProgress(false);
    } else if (!progress) {
        secondaryButton?.hideProgress();
    }
  }, [progress, secondaryButton]);

  useEffect(() => {
    if (!onClick) {
      return;
    }
    console.log("Attaching click handler");
    secondaryButton?.onClick(onClick);
    return () => {
      console.log("Removing click handler");

        secondaryButton?.offClick(onClick);
    };
  }, [onClick, secondaryButton]);

  useSmoothButtonsTransition({
    show: secondaryButton?.show,
    hide: secondaryButton?.hide,
    currentShowedIdRef: system.secondaryButton,
    id: buttonId,
  });

  return null;
};

export default SecondaryButton;
