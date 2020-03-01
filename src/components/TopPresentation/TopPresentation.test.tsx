import * as React from "react";
import * as ReactDOM from "react-dom";
import { TopPresentation } from "./TopPresentation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TopPresentation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
