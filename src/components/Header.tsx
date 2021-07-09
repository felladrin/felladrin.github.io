import React from "react";
import { themeStore, Theme, themeToggled } from "../features/theme";
import { FaSun, FaMoon } from "react-icons/fa";
import { useStore } from "effector-react";

export function Header() {
  const theme = useStore(themeStore);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="images/avatar.jpg" title="Click to see my face :)" style={{ marginRight: "6px" }}>
              <img src="images/avatar.jpg" style={{ maxHeight: "24px", borderRadius: "500rem" }} />
            </a>
            Victor Nogueira
          </li>
          <li className="float-right sticky">
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
          </li>
        </ul>
      </nav>
    </header>
  );
}
