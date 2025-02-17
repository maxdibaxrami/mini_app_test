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
    "--tg-theme-accent-text-color": "#1FB6A8", // Primary accent color
    "--tg-theme-bg-color": "#000000", // Full black background
    "--tg-theme-button-color": "#1FB6A8", // Button color matching primary accent
    "--tg-theme-button-text-color": "#ffffff", // Button text color (white for contrast)
    "--tg-bottom-bar-color": "#0d0d0d", // Darker black for bottom bar
    "--tg-theme-destructive-text-color": "#ec3942", // Destructive action color (e.g., red for delete actions)
    "--tg-theme-header-bg-color": "#0d0d0d", // Slightly lighter black for headers
    "--tg-theme-hint-color": "#a0a0a0", // Grey hint color for secondary text or hints
    "--tg-theme-link-color": "#1FB6A8", // Link color matching primary accent
    "--tg-theme-secondary-bg-color": "#0f0f0f", // Darker grey for secondary background
    "--tg-theme-section-bg-color": "#1b1b1b", // Slightly lighter grey for sections
    "--tg-theme-section-header-text-color": "#1FB6A8", // Section header text color matching accent
    "--tg-theme-subtitle-text-color": "#a0a0a0", // Subtitle text in grey for contrast
    "--tg-theme-text-color": "#f5f5f5" // Main text color (white for contrast)
  };
  

  // Apply the theme colors
  Object.entries(themeColors).forEach(([variable, value]) => {
    root.style.setProperty(variable, value);
  });
}
