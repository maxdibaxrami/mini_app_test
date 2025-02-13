import React, { useEffect } from 'react';
import { secondaryButton } from '@telegram-apps/sdk';

interface SecondaryButtonProps {
  text?: string;
  backgroundColor?: `#${string}`; // Must be a hex string like '#000000'
  textColor?: `#${string}`;       // Must be a hex string like '#ffffff'
  hasShineEffect?: boolean;
  isEnabled?: boolean;
  isLoaderVisible?: boolean;
  isVisible?: boolean;
  position?: 'top' | 'bottom';    // Only 'top' or 'bottom' allowed for position
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text = 'CONTINUE',
  backgroundColor = '#000000',  // Default color
  textColor = '#ffffff',        // Default text color
  hasShineEffect = true,
  isEnabled = true,
  isLoaderVisible = false,
  isVisible = true,
  position = 'bottom',          // Default position
  onClick,
}) => {

  useEffect(() => {
    console.log('Setting secondary button parameters:', {
      backgroundColor,
      hasShineEffect,
      isEnabled,
      isLoaderVisible,
      isVisible,
      position,
      text,
      textColor,
    });

    if (secondaryButton.setParams.isAvailable()) {
      console.log('secondaryButton.setParams is available, setting parameters...');
      secondaryButton.setParams({
        backgroundColor,
        hasShineEffect,
        isEnabled,
        isLoaderVisible,
        isVisible,
        position,
        text,
        textColor,
      });
    } else {
      console.warn('secondaryButton.setParams is NOT available.');
    }
  }, [backgroundColor, hasShineEffect, isEnabled, isLoaderVisible, isVisible, position, text, textColor]);

  useEffect(() => {
    if (onClick && secondaryButton.onClick.isAvailable()) {
      console.log('Attaching secondaryButton onClick listener...');
      secondaryButton.onClick(onClick);

      return () => {
        console.log('Removing secondaryButton onClick listener...');
        secondaryButton.offClick(onClick);
      };
    } else {
      console.warn('secondaryButton.onClick is NOT available or no onClick handler provided.');
    }
  }, [onClick]);

  return null; // No visual component, this button exists within the Telegram Mini App's UI
};

export default SecondaryButton;
