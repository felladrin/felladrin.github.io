import React from "react";

export function Footer() {
  return (
    <nav className="navbar navbar-fixed-bottom">
      <span>Victor Nogueira © {new Date().getFullYear()}</span>
    </nav>
  );
}
