import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
  mainButton,
  secondaryButton,
} from '@telegram-apps/sdk-react';

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  initSDK();

  // Add Eruda if needed for debugging purposes.
  import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);

  // Check if all required components are supported.
  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error('ERR_NOT_SUPPORTED');
  }

  // Mount all components used in the project.
  backButton.mount();
  mainButton.mount();
  secondaryButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();

  // Bind viewport and request fullscreen functionality.
  void viewport
    .mount()
    .catch((e) => {
      console.error('Something went wrong mounting the viewport', e);
    })
    .then(() => {
      viewport.bindCssVars();
      viewport.requestFullscreen();
    });

  // Define components-related CSS variables.
  miniApp.bindCssVars();
  themeParams.bindCssVars();

  // Bind color pattern to CSS variables
  const root = document.documentElement;
  const themeColors = {
    "--tg-theme-accent-text-color": "#1FB6A8", // Primary accent color (calm turquoise)
    "--tg-theme-bg-color": "#000000", // Full black background
    "--tg-theme-button-color": "#FF5A5F", // Button color (inviting red/pink for warmth)
    "--tg-theme-button-text-color": "#ffffff", // Button text color (white for readability)
    "--tg-bottom-bar-color": "#333333", // Dark grey for bottom bar (softens the black)
    "--tg-theme-destructive-text-color": "#FF3B30", // Bright red for destructive actions
    "--tg-theme-header-bg-color": "#1A1A1A", // Dark grey for the header (contrast but subtle)
    "--tg-theme-hint-color": "#B0B0B0", // Light grey for hint text
    "--tg-theme-link-color": "#1FB6A8", // Links matching the primary accent color
    "--tg-theme-secondary-bg-color": "#121212", // Dark grey for secondary backgrounds
    "--tg-theme-section-bg-color": "#1C1C1C", // Slightly lighter grey for sections
    "--tg-theme-section-header-text-color": "#1FB6A8", // Section header text color (matches accent)
    "--tg-theme-subtitle-text-color": "#A8A8A8", // Subtitle text in light grey
    "--tg-theme-text-color": "#ffffff" // Main text color (white for readability)
  };
  

  // Apply the theme colors
  Object.entries(themeColors).forEach(([variable, value]) => {
    root.style.setProperty(variable, value);
  });
}
