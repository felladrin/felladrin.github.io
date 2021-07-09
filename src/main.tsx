import { createElement } from "react";
import { render } from "react-dom";
import { App } from "./components/App";

render(createElement(App), document.body.appendChild(document.createElement("div")));
