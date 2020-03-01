import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Divider, Header, Icon, Segment } from "semantic-ui-react";

import * as Parser from "rss-parser";
const parser = new Parser();

const cardColors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black"
];

interface IState {
  feed: Parser.Output;
}

export class BlogPosts extends React.Component<{}, IState> {
  public state = {
    feed: {
      description: "",
      feedUrl: "",
      items: new Array<Parser.Item>(),
      link: "",
      title: ""
    }
  };

  public async componentDidMount() {
    const feed = await parser.parseURL(
      [
        "https://cors-anywhere.herokuapp.com/",
        "https://medium.com/feed/@felladrin"
      ].join("")
    );
    this.setState({ feed });
  }

  public render() {
    if (!this.state.feed) {
      return "";
    }

    return (
      <Segment>
        <Header as="h1">
          <a href={this.state.feed.link} target="_blank">
            <Icon name="medium" />
          </a>
          Latest Posts on Medium
        </Header>
        <Divider />
        <Card.Group>
          {this.state.feed.items.map(post => {
            if (!post.categories) {
              return "";
            }

            return (
              <Card
                fluid={true}
                // @ts-ignore
                color={
                  cardColors[Math.floor(Math.random() * cardColors.length)]
                }
                header={post.title}
                meta={post.pubDate}
                href={post.link}
                key={post.guid}
              />
            );
          })}
        </Card.Group>
      </Segment>
    );
  }
}

export default BlogPosts;
