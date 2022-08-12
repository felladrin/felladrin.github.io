import { parseHtmlString } from "../../functions/parseHtmlString";
import { articles } from "../articles";
import { contactForm } from "../contactForm";
import { intro } from "../intro";
import htmlString from "bundle-text:./index.html";
import { npmPackages } from "../npmPackages";

export const main = parseHtmlString(htmlString).firstElementChild;

const leftColumn = main.querySelector("#leftColumn");
leftColumn.appendChild(intro);
leftColumn.appendChild(articles);

const rightColumn = main.querySelector("#rightColumn");
rightColumn.appendChild(npmPackages);
rightColumn.appendChild(contactForm);
