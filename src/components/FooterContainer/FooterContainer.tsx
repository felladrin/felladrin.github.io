import * as React from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import "./FooterContainer.css";

export class FooterContainer extends React.Component {
  public render() {
    return (
      <div className="footerContainer">
        <Container textAlign="center">
          <Grid stackable={true}>
            <Grid.Row>
              <Grid.Column>
                Victor Nogueira &copy; {new Date().getFullYear()}
                <br />
                <a
                  href="https://github.com/felladrin/felladrin.github.io"
                  target="_blank"
                >
                  <Icon link={true} name="fork" />
                  Fork on GitHub! <Icon link={true} name="github" />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default FooterContainer;
