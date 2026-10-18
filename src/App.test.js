import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import i18n from "./i18n";

beforeEach(async () => {
  await i18n.changeLanguage("en");
  localStorage.clear();
});

test("switches all portfolio sections, document language, and remembers the choice", async () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /Projects & Research/ })
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Switch to Japanese" }));
  expect(document.documentElement.lang).toBe("ja");
  expect(localStorage.getItem("portfolioLanguage")).toBe("ja");
  expect(
    screen.getByRole("heading", { name: /プロジェクト・研究/ })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /職務経歴/ })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /学歴/ })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "英語に切り替える" })
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "英語に切り替える" }));
  expect(document.documentElement.lang).toBe("en");
  expect(localStorage.getItem("portfolioLanguage")).toBe("en");
  // Existing theme control remains functional after a language change.
  fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));
  expect(document.body).toHaveClass("light");
});
