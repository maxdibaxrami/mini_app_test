import React, { useEffect } from 'react';
import { mainButton } from '@telegram-apps/sdk';

interface MainButtonProps {
  text?: string;
  backgroundColor?: `#${string}`; // Ensure it's a hex string
  textColor?: `#${string}`;       // Ensure it's a hex string
  hasShineEffect?: boolean;
  isEnabled?: boolean;
  isLoaderVisible?: boolean;
  isVisible?: boolean;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  text = 'CONTINUE',
  backgroundColor = '#000000',  // Default as a hex string
  textColor = '#ffffff',        // Default as a hex string
  hasShineEffect = true,
  isEnabled = true,
  isLoaderVisible = false,
  isVisible = true,
  onClick,
}) => {

  useEffect(() => {
    // Mount the main button if available
    console.log("111")

    if (mainButton.mount.isAvailable()) {
      mainButton.mount();
    }

    return () => {
      // Unmount when the component is unmounted
      if (mainButton.isMounted()) {
        mainButton.unmount();
      }
    };
  }, []);

  useEffect(() => {
    // Set button parameters if setParams is available
    console.log(mainButton.setParams.isAvailable())

    if (mainButton.setParams.isAvailable()) {
      mainButton.setParams({
        backgroundColor,
        hasShineEffect,
        isEnabled,
        isLoaderVisible,
        isVisible,
        text,
        textColor,
      });
    }
  }, [backgroundColor, hasShineEffect, isEnabled, isLoaderVisible, isVisible, text, textColor]);

  useEffect(() => {
    console.log(mainButton.onClick.isAvailable())
    if (onClick && mainButton.onClick.isAvailable()) {
      // Bind the click listener
      mainButton.onClick(onClick);

      return () => {
        // Unbind the click listener
        mainButton.offClick(onClick);
      };
    }
  }, [onClick]);

  return null; // This component renders nothing visually
};

export default MainButton;
