import axios from "axios";
import * as React from "react";
import {
  Container,
  Divider,
  Header,
  Icon,
  Label,
  Segment
} from "semantic-ui-react";

interface IGitHubProject {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage: string;
  html_url: string;
}

interface IProjectListState {
  githubProjects: IGitHubProject[];
  isLoading: boolean;
}

export class ProjectList extends React.Component<{}, IProjectListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      githubProjects: [],
      isLoading: false
    };
  }

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const gitHubResponse = await axios.get(
        "https://api.github.com/users/felladrin/repos?sort=pushed"
      );
      let githubProjects: any[] = gitHubResponse.data;
      githubProjects = githubProjects.filter(project => !project.archived);
      this.setState({ githubProjects, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  public renderProjectList() {
    return this.state.githubProjects.map(project => {
      let description;
      let homepage;
      let htmlUrl;
      let stargazersCount;
      let forksCount;
      let language;

      if (project.description) {
        description = <p>{project.description}</p>;
      }

      if (project.homepage) {
        homepage = (
          <Label>
            <a href={project.homepage} target="_blank">
              <Icon name="globe" /> Website
            </a>
          </Label>
        );
      }

      if (project.html_url) {
        htmlUrl = (
          <Label>
            <a href={project.html_url} target="_blank">
              <Icon name="github" />
              Repository
            </a>
          </Label>
        );
      }

      if (project.stargazers_count) {
        stargazersCount = (
          <Label title={`${project.stargazers_count} Stars`}>
            <Icon name="star" /> {project.stargazers_count}
          </Label>
        );
      }

      if (project.forks_count) {
        forksCount = (
          <Label title={`${project.forks_count} Forks`}>
            <Icon name="code branch" /> {project.forks_count}
          </Label>
        );
      }

      if (project.language) {
        language = (
          <Label as="a" tag={true}>
            {project.language}
          </Label>
        );
      }

      return (
        <Container key={project.id}>
          <Divider />
          <Header>{project.name}</Header>
          {description}
          <Label.Group>
            {homepage}
            {htmlUrl}
            {stargazersCount}
            {forksCount}
            {language}
          </Label.Group>
        </Container>
      );
    });
  }

  public render() {
    if (!this.state.githubProjects || !this.state.githubProjects.length) {
      return null;
    }

    return (
      <Segment>
        <Header as="h1">Open Source Projects</Header>
        <Container>{this.renderProjectList()}</Container>
      </Segment>
    );
  }
}

export default ProjectList;
