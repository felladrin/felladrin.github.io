import React from "react";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <hr />
      <span>Victor Nogueira © {new Date().getFullYear()}</span>
      <br />
      <a href="https://github.com/felladrin/felladrin.github.io" target="_blank">
        <FaGithub /> Fork on GitHub!
      </a>
    </footer>
  );
}
