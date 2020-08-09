import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, Segment } from "semantic-ui-react";

export class AboutMe extends React.Component {
  public render() {
    return (
      <Segment>
        <Header as="h1">Welcome, traveler!</Header>
        <p>
          If you're here, you might be wondering a little more about Victor.
        </p>
        <p>Maybe the following info can give you an overview:</p>
        <ul style={{ listStyleType: "none", marginBottom: 20 }}>
          <li>
            <Icon name="linkedin square" /> he's open to new contacts on{" "}
            <a
              href="https://www.linkedin.com/in/victornogueira"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Icon name="github" /> has released a lot of projects on{" "}
            <a href="https://github.com/felladrin" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <Icon name="medium" /> has written some posts on{" "}
            <a href="https://medium.com/@felladrin" target="_blank">
              Medium
            </a>
          </li>
          <li>
            <Icon name="twitter" /> has shared a lot of links on{" "}
            <a href="https://twitter.com/felladrin" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <Icon name="youtube" /> has uploaded a lot of time lapses to{" "}
            <a
              href="https://www.youtube.com/user/Felladrin/videos"
              target="_blank"
            >
              Youtube
            </a>
          </li>
          <li>
            <Icon name="gamepad" /> has released a dozen games on{" "}
            <a href="https://felladrin.itch.io" target="_blank">
              Itch.io
            </a>
          </li>
          <li>
            <Icon name="imdb" /> has rated a thousand movies on{" "}
            <a
              href="http://www.imdb.com/user/ur36368230/ratings?sort=your_ratings:desc"
              target="_blank"
            >
              IMDB
            </a>
          </li>
        </ul>
        <p>
          Also, he has open-sourced this website, so you can{" "}
          <a
            href="https://github.com/felladrin/felladrin.github.io"
            target="_blank"
          >
            <Icon name="code branch" />
            fork
          </a>{" "}
          and customize it for yourself!
        </p>
      </Segment>
    );
  }
}

export default AboutMe;
