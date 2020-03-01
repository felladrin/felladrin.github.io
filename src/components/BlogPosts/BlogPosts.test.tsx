import * as React from "react";
import * as ReactDOM from "react-dom";
import BlogPosts from "./BlogPosts";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BlogPosts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
