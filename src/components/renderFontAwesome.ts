import { h } from "forest";
import { library, dom, IconDefinition } from "@fortawesome/fontawesome-svg-core";

export function renderFontAwesome(iconDefinition: IconDefinition) {
  library.add(iconDefinition);
  h("i", { attr: { class: `${iconDefinition.prefix} fa-${iconDefinition.iconName}` } });
}

dom.watch();
