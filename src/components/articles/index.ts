import { articles as articleList } from "../../constants/articles";
import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";

const template = parseHtmlString(htmlString);

export const articles = template.firstElementChild;

for (const article of articleList) {
  const articleElement = template
    .querySelector("template")
    .content.cloneNode(true) as Element;

  articleElement.querySelector("span").innerText = article.date;

  ((anchor) => {
    anchor.href = article.url;
    anchor.innerText = article.title;
  })(articleElement.querySelector("a"));

  template.querySelector("slot").appendChild(articleElement);
}
