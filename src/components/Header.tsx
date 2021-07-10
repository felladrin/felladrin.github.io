import React from "react";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function Header() {
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
            <ToggleThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
