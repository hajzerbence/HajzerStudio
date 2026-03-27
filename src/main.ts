// Mini TypeScript entry point for scalable feature modules.
// It can gradually replace legacy plain JS as the project grows.

type Lang = "hu" | "en";

const defaultLang: Lang = "hu";

function getCurrentLang(): Lang {
  const lang = document.documentElement.lang;
  return lang === "en" ? "en" : defaultLang;
}

function initTypeScriptLayer(): void {
  const marker = document.querySelector("[data-ts-ready]");
  if (marker instanceof HTMLElement) {
    marker.dataset.tsReady = "true";
    marker.dataset.lang = getCurrentLang();
  }
}

initTypeScriptLayer();
