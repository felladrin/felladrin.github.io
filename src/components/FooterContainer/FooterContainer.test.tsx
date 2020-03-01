import * as React from "react";
import * as ReactDOM from "react-dom";
import { FooterContainer } from "./FooterContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FooterContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
