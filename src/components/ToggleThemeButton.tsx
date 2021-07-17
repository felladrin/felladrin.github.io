import React, { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Theme } from "../enums/Theme";
import { useLocalStorage } from "react-use";

export function ToggleThemeButton() {
  const [theme, setTheme] = useLocalStorage("data-theme", Theme.Dark);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme as Theme);
  }, [theme]);

  return (
    <a onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)} data-test-id="toggle-theme-button">
      {theme === Theme.Dark && (
        <span title="Use Light Theme">
          <FaSun />
        </span>
      )}
      {theme === Theme.Light && (
        <span title="Use Dark Theme">
          <FaMoon />
        </span>
      )}
    </a>
  );
}
