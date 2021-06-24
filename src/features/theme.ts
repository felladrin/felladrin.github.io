import { createStore, createEvent, createEffect } from "effector";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export const themeToggled = createEvent<MouseEvent>();

export const themeStore = createStore<Theme>((window.localStorage.getItem("data-theme") as Theme) ?? Theme.Dark).on(
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
