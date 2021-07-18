import React from "react";
import { FaMoon } from "react-icons/fa";
import halfmoon from "halfmoon";

export const ToggleThemeButton = () => (
  <div
    className="btn btn-action mr-5"
    onClick={() => halfmoon.toggleDarkMode()}
    data-test-id="toggle-theme-button"
    data-toggle="tooltip"
    data-placement="left"
    data-title="Toggle Dark Mode"
  >
    <FaMoon />
  </div>
);
