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

  // Add Eruda if needed.
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

  // Create an object to store colors from themeParams
  const colors = {
    bg_color: '#FFFFFF', // White background
    text_color: '#1C2938', // Dark gray text for contrast
    hint_color: '#A0AEC0', // Light gray for hints
    link_color: '#1FB6A8', // First primary color for links
    button_color: '#1FB6A8', // First primary color for buttons
    button_text_color: '#FFFFFF', // White button text for contrast
    accent_text_color: '#F59E0B', // Second primary color for accents
    destructive_text_color: '#E53E3E', // Red for destructive actions
    header_background_color: '#FFFFFF', // White header background
    subtitle_text_color: '#F59E0B', // Second primary color for subtitles
    section_background_color: '#F7FAFC', // Light gray for section background
    secondary_background_color: '#EDF2F7', // Slightly darker gray for secondary backgrounds
    section_separator_color: '#E2E8F0', // Light separator color
    section_header_text_color: '#1C2938', // Dark gray for section headers
  };
  

  // Apply the colors as CSS variables for your app
  document.documentElement.style.setProperty('--tg-bg-color', colors.bg_color);
  document.documentElement.style.setProperty('--tg-text-color', colors.text_color);
  document.documentElement.style.setProperty('--tg-hint-color', colors.hint_color);
  document.documentElement.style.setProperty('--tg-link-color', colors.link_color);
  document.documentElement.style.setProperty('--tg-button-color', colors.button_color);
  document.documentElement.style.setProperty('--tg-button-text-color', colors.button_text_color);
  document.documentElement.style.setProperty('--tg-accent-text-color', colors.accent_text_color);
  document.documentElement.style.setProperty('--tg-destructive-text-color', colors.destructive_text_color);
  document.documentElement.style.setProperty('--tg-header-background-color', colors.header_background_color);
  document.documentElement.style.setProperty('--tg-subtitle-text-color', colors.subtitle_text_color);
  document.documentElement.style.setProperty('--tg-section-background-color', colors.section_background_color);
  document.documentElement.style.setProperty('--tg-secondary-background-color', colors.secondary_background_color);
  document.documentElement.style.setProperty('--tg-section-separator-color', colors.section_separator_color);
  document.documentElement.style.setProperty('--tg-section-header-text-color', colors.section_header_text_color);

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
}
