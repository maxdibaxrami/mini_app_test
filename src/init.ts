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
  postEvent
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
  postEvent('web_app_set_bottom_bar_color', { color: "#000000" });
  postEvent('web_app_set_background_color', { color: "#000000" });


  // Bind viewport and request fullscreen functionality.
  void viewport
    .mount()
    .catch((e) => {
      console.error('Something went wrong mounting the viewport', e);
    })
    .then(() => {
      viewport.bindCssVars(); // Binds the default Telegram theme parameters
      viewport.requestFullscreen();
    });

  // Apply custom theme after default theme is bound
  applyCustomTheme();
}

/**
 * Overrides Telegram's default theme colors with custom values.
 */
function applyCustomTheme() {
  document.documentElement.style.setProperty('--tg-theme-accent-text-color', '#1FB6A8'); // Primary accent color
  document.documentElement.style.setProperty('--tg-theme-bg-color', '#000000'); // Black background
  document.documentElement.style.setProperty('--tg-theme-button-color', '#1FB6A8'); // Primary button color
  document.documentElement.style.setProperty('--tg-theme-button-text-color', '#ffffff'); // Button text color (white)
  document.documentElement.style.setProperty('--tg-theme-destructive-text-color', '#FF6B6B'); // Destructive action text color
  document.documentElement.style.setProperty('--tg-theme-header-bg-color', '#000000'); // Black header background
  document.documentElement.style.setProperty('--tg-theme-hint-color', '#707070'); // Subtle hint color (gray)
  document.documentElement.style.setProperty('--tg-theme-link-color', '#1FB6A8'); // Link color (primary)
  document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#111111'); // Slightly lighter black for secondary sections
  document.documentElement.style.setProperty('--tg-theme-section-bg-color', '#000000'); // Section background (black)
  document.documentElement.style.setProperty('--tg-theme-section-header-text-color', '#1FB6A8'); // Section header text (primary)
  document.documentElement.style.setProperty('--tg-theme-subtitle-text-color', '#909090'); // Subtitle text (lighter gray)
  document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff'); // Main text color (white)
}