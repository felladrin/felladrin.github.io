import React from "react";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="images/avatar.jpg" title="Click to see my face :)">
        <img src="images/avatar.jpg" className="border rounded-circle" />
        Victor Nogueira
      </a>
      <div className="navbar-content ml-auto">
        <ToggleThemeButton />
      </div>
    </nav>
  );
}
