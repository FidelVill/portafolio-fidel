export type Theme = "dark" | "light";

export const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as Theme) || getSystemTheme();
};

export const setStoredTheme = (theme: Theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
};