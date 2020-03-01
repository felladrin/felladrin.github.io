import * as React from "react";
import { Button, Container, Grid, Header, Image } from "semantic-ui-react";
import "./TopPresentation.css";

export class TopPresentation extends React.Component {
  public renderHeader(): JSX.Element {
    return (
      <Header
        as="h1"
        content="Victor Nogueira"
        subheader="Software Engineer & Game Developer"
      />
    );
  }

  public renderButtons(): JSX.Element {
    return (
      <Container>
        <a href="https://github.com/felladrin" target="_blank">
          <Button circular={true} icon="github" />
        </a>
        <a href="https://www.linkedin.com/in/victornogueira/" target="_blank">
          <Button circular={true} icon="linkedin" />
        </a>
        <a href="https://felladrin.itch.io" target="_blank">
          <Button circular={true} icon="gamepad" />
        </a>
        <a href="https://twitter.com/felladrin" target="_blank">
          <Button circular={true} icon="twitter" />
        </a>
      </Container>
    );
  }

  public renderContactMeButton(): JSX.Element {
    return (
      <a href="#contactForm">
        <Button
          content="Contact"
          icon="paper plane outline"
          labelPosition="left"
          positive={true}
        />
      </a>
    );
  }

  public render() {
    return (
      <div className="topPresentation">
        <Container className="headerContainer">
          <Grid stackable={true}>
            <Grid.Row>
              <Grid.Column width={12}>
                <Container>
                  <Grid stackable={true}>
                    <Grid.Row>
                      <Grid.Column width={4}>
                        <Image
                          src="/images/avatar.jpg"
                          circular={true}
                          size="medium"
                          centered={true}
                        />
                      </Grid.Column>
                      <Grid.Column
                        width={12}
                        only="computer tablet"
                        verticalAlign="middle"
                      >
                        {this.renderHeader()}
                        {this.renderButtons()}
                      </Grid.Column>
                      <Grid.Column
                        width={16}
                        only="mobile"
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        {this.renderHeader()}
                        {this.renderButtons()}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Container>
              </Grid.Column>
              <Grid.Column
                width={4}
                only="computer tablet"
                verticalAlign="middle"
                textAlign="right"
              >
                {this.renderContactMeButton()}
              </Grid.Column>
              <Grid.Column
                width={16}
                only="mobile"
                verticalAlign="middle"
                textAlign="center"
              >
                {this.renderContactMeButton()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default TopPresentation;
