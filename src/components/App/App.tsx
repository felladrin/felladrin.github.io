import * as React from "react";
import { Container } from "semantic-ui-react";
import { ContentContainer } from "../ContentContainer";
import { FooterContainer } from "../FooterContainer";
import { TopPresentation } from "../TopPresentation";

export class App extends React.Component {
  public render() {
    return (
      <Container fluid={true}>
        <TopPresentation />
        <ContentContainer />
        <FooterContainer />
      </Container>
    );
  }
}

export default App;
