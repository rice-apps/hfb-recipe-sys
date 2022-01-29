import Cookies from 'js-cookie';

/**
 * Checks if Google translate is already configured to translate to another language, and return that language if so.
 * If no language is already saved by Google translate, English (en) will be the default.
 * @returns The target language that Google translate will use by default
 */
export default function loadLanguageSavedByGoogle(): string {
  // Get saved languages (e.g. "/en/es")
  // Use cookie because Google saves the last language used as a cookie
  let savedLanguages = Cookies.get('googtrans');

  // Start with english if no language has been saved
  if (!savedLanguages) {
    return 'en'
  }

  // Get the target language from the saved cookie
  let targetLanguage = savedLanguages.split("/")[2];
  
  console.log("Starting with saved language:", targetLanguage);

  return targetLanguage;
}