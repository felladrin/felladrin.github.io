import { using } from "forest";
import { renderFooter } from "./components/renderFooter";
import { renderHeader } from "./components/renderHeader";
import { renderMain } from "./components/renderMain";

using(document.body, () => {
  renderHeader();
  renderMain();
  renderFooter();
});
