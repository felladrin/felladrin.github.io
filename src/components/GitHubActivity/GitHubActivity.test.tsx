import * as React from "react";
import * as ReactDOM from "react-dom";
import GitHubActivity from "./GitHubActivity";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GitHubActivity height={350} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
