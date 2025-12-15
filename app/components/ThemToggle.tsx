"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="hover:cursor-pointer text-2xl"
    >
       {currentTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
