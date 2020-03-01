import * as React from "react";
import { Form, Header, Segment } from "semantic-ui-react";

export class Contact extends React.Component {
  public render() {
    return (
      <Segment id="contactForm">
        <Header as="h1">Contact</Header>
        <Form
          action="https://docs.google.com/forms/d/1zGayNb5zicpGlD_mYiunk8A4-FLB7GSG-YEyxW-URfw/formResponse"
          className="form"
          method="POST"
          id="contact-form"
        >
          <Form.Group widths="equal">
            <Form.Input
              name="entry.605799379"
              fluid={true}
              label="Your Name"
              placeholder="Type in your name"
              required={true}
            />
            <Form.Input
              name="entry.1273651383"
              fluid={true}
              label="Your Email"
              placeholder="Type in your email"
              required={true}
            />
          </Form.Group>
          <Form.TextArea
            className="form-control"
            name="entry.1634498"
            cols={30}
            rows={5}
            label="Your Message"
            placeholder="What do you have in mind?"
            required={true}
          />
          <Form.Button type="submit" fluid={true}>
            Submit
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default Contact;
