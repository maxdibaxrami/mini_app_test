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
    console.log('Setting main button parameters:', {
      backgroundColor,
      hasShineEffect,
      isEnabled,
      isLoaderVisible,
      isVisible,
      text,
      textColor,
    });

    if (mainButton) {
      console.log('mainButton.setParams is available, setting parameters...');
      mainButton.setParams({
        backgroundColor,
        hasShineEffect,
        isEnabled,
        isLoaderVisible,
        isVisible,
        text,
        textColor,
      });
    } else {
      console.warn('mainButton.setParams is NOT available.');
    }
  }, [backgroundColor, hasShineEffect, isEnabled, isLoaderVisible, isVisible, text, textColor]);

  useEffect(() => {
    if (onClick && mainButton) {
      console.log('Attaching mainButton onClick listener...');
      mainButton.onClick(onClick);

      return () => {
        console.log('Removing mainButton onClick listener...');
        mainButton.offClick(onClick);
      };
    } else {
      console.warn('mainButton.onClick is NOT available or no onClick handler provided.');
    }
  }, [onClick]);

  return null; // This component renders nothing visually
};

export default MainButton;
