import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "./index.html?raw";
import {
  faGithub,
  faImdb,
  faItchIo,
  faLinkedin,
  faStackExchange,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { replaceHtmlSlots } from "../../functions/replaceHtmlSlots";
import { getIconNode } from "../../functions/getIconNode";

export const intro = parseHtmlString(htmlString).firstElementChild;

replaceHtmlSlots(intro, {
  faLinkedin: getIconNode(faLinkedin),
  faGithub: getIconNode(faGithub),
  faTwitter: getIconNode(faTwitter),
  faStackExchange: getIconNode(faStackExchange),
  faYoutube: getIconNode(faYoutube),
  faItchIo: getIconNode(faItchIo),
  faImdb: getIconNode(faImdb),
});
