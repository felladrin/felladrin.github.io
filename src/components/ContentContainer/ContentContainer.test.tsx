import * as React from "react";
import * as ReactDOM from "react-dom";
import { ContentContainer } from "./ContentContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ContentContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
