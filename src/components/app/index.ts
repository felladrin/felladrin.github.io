import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";
import { header } from "../header";
import { main } from "../main";
import { replaceHtmlSlots } from "../../functions/replaceHtmlSlots";

export const app = parseHtmlString(htmlString).firstElementChild;

replaceHtmlSlots(app, { header, main });
