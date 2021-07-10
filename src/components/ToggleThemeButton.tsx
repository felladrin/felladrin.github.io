import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useStore } from "effector-react";
import { createStore, createEvent, createEffect } from "effector";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const themeToggled = createEvent();

const themeStore = createStore<Theme>((window.localStorage.getItem("data-theme") as Theme) ?? Theme.Dark).on(
  themeToggled,
  (theme) => (theme === Theme.Dark ? Theme.Light : Theme.Dark)
);

const saveThemeOnLocalStorage = createEffect((theme: Theme) => {
  window.localStorage.setItem("data-theme", theme);
});

const setThemeOnDocument = createEffect((theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
});

themeStore.watch(setThemeOnDocument);
themeStore.watch(saveThemeOnLocalStorage);

export function ToggleThemeButton() {
  const theme = useStore(themeStore);

  return (
    <a onClick={() => themeToggled()} data-test-id="toggle-theme-button">
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
