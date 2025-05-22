import trTR from "./variants/tr-TR";
import enUS from "./variants/en-US";

const locales = {
  "tr-TR": trTR,
  "en-US": enUS,
};

function getUserLocale() {
  if (typeof window !== "undefined") {
    return window.navigator.language in locales
      ? window.navigator.language
      : "tr-TR";
  }
  return "tr-TR";
}

export function localize(
  key: keyof typeof trTR.translations,
  locale?: string
) {
  const lang = (locale || getUserLocale()) as keyof typeof locales;
  return locales[lang]?.translations[key] || key;
}