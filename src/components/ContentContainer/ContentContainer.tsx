import * as React from "react";
import { Container, Grid } from "semantic-ui-react";
import { AboutMe } from "../AboutMe";
import { BlogPosts } from "../BlogPosts";
import { Contact } from "../Contact";
import { GitHubActivity } from "../GitHubActivity";
import { ProjectList } from "../ProjectList";
import "./ContentContainer.css";

export class ContentContainer extends React.Component {
  public render() {
    return (
      <div className="content">
        <Container>
          <Grid stackable={true}>
            <Grid.Row>
              <Grid.Column width={10}>
                <AboutMe />
                <BlogPosts />
                <GitHubActivity height={400} />
                <Contact />
              </Grid.Column>
              <Grid.Column width={6}>
                <ProjectList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default ContentContainer;
