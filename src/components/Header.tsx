import React from "react";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a
          className="navbar-brand"
          href="images/avatar.jpg"
          data-toggle="tooltip"
          data-placement="right"
          data-title="Willing to see my face? :) Click on it!"
        >
          <img src="images/avatar.jpg" className="border rounded-circle" />
        </a>
        Victor Nogueira
      </div>
      <div className="navbar-content ml-auto">
        <ToggleThemeButton />
      </div>
    </nav>
  );
}
