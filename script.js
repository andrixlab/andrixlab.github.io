const signals = [
  {
    ru: "паттерны проявляются медленно",
    en: "patterns emerge slowly"
  },
  {
    ru: "ясность постоянно движется",
    en: "clarity is a moving target"
  },
  {
    ru: "сигнал скрыт под поверхностью",
    en: "the signal is below the surface"
  },
  {
    ru: "системы помнят",
    en: "systems remember"
  },
  {
    ru: "смысл прячется в слоях",
    en: "meaning hides in layers"
  },
  {
    ru: "посмотри ближе, затем упрости",
    en: "look closer, then simplify"
  },
  {
    ru: "структура ждёт под шумом",
    en: "structure waits under noise"
  }
];

const signalLine = document.querySelector("#signalLine");
const signalButton = document.querySelector("#signalButton");
const languageButtons = document.querySelectorAll("[data-lang-button]");
const translatableElements = document.querySelectorAll("[data-i18n]");
let currentLanguage = "ru";
let currentSignalIndex = 2;

function readSavedLanguage() {
  try {
    return localStorage.getItem("andrix-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("andrix-language", language);
  } catch {
    return;
  }
}

function renderSignal() {
  if (!signalLine) return;

  signalLine.textContent = signals[currentSignalIndex][currentLanguage];
}

function setLanguage(language) {
  const nextLanguage = language === "en" ? "en" : "ru";
  currentLanguage = nextLanguage;
  document.documentElement.lang = nextLanguage;
  document.documentElement.dataset.lang = nextLanguage;

  translatableElements.forEach((element) => {
    const text = element.dataset[nextLanguage];
    if (text) {
      element.textContent = text;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langButton === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderSignal();
  saveLanguage(nextLanguage);
}

const savedLanguage = readSavedLanguage() || "ru";

setLanguage(savedLanguage);

function pickSignal() {
  if (!signalLine) return;

  currentSignalIndex = Math.floor(Math.random() * signals.length);
  renderSignal();
}

pickSignal();

if (signalButton) {
  signalButton.addEventListener("click", pickSignal);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langButton);
  });
});
