import React from "react";
import { FaGithub, FaImdb, FaItchIo, FaLinkedin, FaTwitter, FaYoutube, FaStackExchange } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";

export function Intro() {
  return (
    <div className="card">
      <h2 className="card-title">Welcome, traveler!</h2>
      <p>If you're here, you might be wondering a little more about Victor.</p>
      <p>Maybe the following info can give you an overview:</p>
      <ul className="ml-20" style={{ listStyleType: "none" }}>
        <li>
          <FaLinkedin height="30px" /> <span>he's open to new contacts on </span>
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
          <FaTwitter /> <span>has shared a bunch of links on </span>
          <a href="https://twitter.com/felladrin" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <FaStackExchange /> <span>has posted some answers on </span>
          <a href="https://stackexchange.com/users/1461447/felladrin?tab=accounts" target="_blank">
            StackExchange
          </a>
        </li>
        <li>
          <FaYoutube /> <span>has uploaded some time lapses to </span>
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
          <CgGitFork />
        </a>
        <span> and customize it for yourself!</span>
      </p>
    </div>
  );
}
