const originalLanguages = navigator.languages;

afterEach(() => {
  Object.defineProperty(navigator, "languages", {
    configurable: true,
    value: originalLanguages,
  });
  localStorage.clear();
});

test.each([
  [["ja-JP", "en-US"], null, "ja"],
  [["en-US"], null, "en"],
  [["fr-FR", "ja-JP"], null, "en"],
  [["ja-JP"], "en", "en"],
  [["en-US"], "ja", "ja"],
  [["en-US"], "fr", "en"],
])(
  "detects %j with stored preference %s as %s",
  (languages, stored, expected) => {
    localStorage.clear();
    Object.defineProperty(navigator, "languages", {
      configurable: true,
      value: languages,
    });
    if (stored) localStorage.setItem("portfolioLanguage", stored);
    jest.isolateModules(() => {
      const i18n = require("./index").default;
      expect(i18n.resolvedLanguage).toBe(expected);
      expect(document.documentElement.lang).toBe(expected);
      expect(localStorage.getItem("portfolioLanguage")).toBe(stored);
    });
  }
);
