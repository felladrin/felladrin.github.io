import { icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

export function getIconNode(iconDefinition: IconDefinition) {
  return icon(iconDefinition).node.item(0);
}
