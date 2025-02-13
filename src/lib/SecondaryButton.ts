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
    console.log("111")
    if (secondaryButton.setParams.isAvailable()) {
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
    }
  }, [backgroundColor, hasShineEffect, isEnabled, isLoaderVisible, isVisible, position, text, textColor]);

  useEffect(() => {
    console.log("111")

    if (onClick && secondaryButton.onClick.isAvailable()) {
      // Bind the click listener
      secondaryButton.onClick(onClick);

      return () => {
        // Unbind the click listener when component unmounts
        secondaryButton.offClick(onClick);
      };
    }
  }, [onClick]);

  return null; // No visual component, this button exists within the Telegram Mini App's UI
};

export default SecondaryButton;
