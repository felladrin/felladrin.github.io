import React from "react";
import { FaGithub, FaImdb, FaItchIo, FaLinkedin, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";

export function Main() {
  return (
    <main>
      <h2>Welcome, traveler!</h2>
      <p>If you're here, you might be wondering a little more about Victor.</p>
      <p>Maybe the following info can give you an overview:</p>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <FaLinkedin /> <span>he's open to new contacts on </span>
          <a href="https://www.linkedin.com/in/victornogueira" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <FaGithub /> <span>has released a lot of projects on </span>
          <a href="https://github.com/felladrin" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <FaMedium /> <span>has written some posts on </span>
          <a href="https://medium.com/@felladrin" target="_blank">
            Medium
          </a>
        </li>
        <li>
          <FaTwitter /> <span>has shared a lot of links on </span>
          <a href="https://twitter.com/felladrin" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <FaYoutube /> <span>has uploaded a lot of time lapses to </span>
          <a href="https://www.youtube.com/user/Felladrin/videos" target="_blank">
            Youtube
          </a>
        </li>
        <li>
          <FaItchIo /> <span>has released a dozen games on </span>
          <a href="https://felladrin.itch.io" target="_blank">
            Itch.io
          </a>
        </li>
        <li>
          <FaImdb /> <span>has rated a thousand movies on </span>
          <a href="http://www.imdb.com/user/ur36368230/ratings?sort=your_ratings:desc" target="_blank">
            IMDB
          </a>
        </li>
      </ul>
      <p>
        <span>Also, he has open-sourced this website, so you can </span>
        <a href="https://github.com/felladrin/felladrin.github.io" target="_blank">
          fork
        </a>
        <span> and customize it for yourself!</span>
      </p>
    </main>
  );
}
