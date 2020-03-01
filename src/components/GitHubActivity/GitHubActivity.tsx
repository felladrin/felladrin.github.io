import axios from "axios";
import * as React from "react";
import GitHubFeed from "react-github-activity";
import { Segment } from "semantic-ui-react";
import "./GitHubActivity.css";

interface IContentContainerProps {
  height: number;
}

interface IContentContainerState {
  events: object[];
}

export class GitHubActivity extends React.Component<
  IContentContainerProps,
  IContentContainerState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: []
    };
  }

  public componentDidMount() {
    axios
      .get("https://api.github.com/users/felladrin/events")
      .then(response => {
        this.setState({
          events: response.data
        });
      });
  }

  public render() {
    let gitHubFeed;

    if (this.state.events && this.state.events.length) {
      gitHubFeed = (
        <GitHubFeed
          fullName="Victor Nogueira"
          userName="felladrin"
          avatarUrl="https://avatars3.githubusercontent.com/u/418083"
          events={this.state.events}
        />
      );
    }

    return (
      <Segment style={{ height: this.props.height }} id="gitHubFeedSegment">
        {gitHubFeed}
      </Segment>
    );
  }
}

export default GitHubActivity;
