import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";
import type { DevToArticle } from "../../types/DevToArticle";

const template = parseHtmlString(htmlString);

export const articles = template.firstElementChild;

const articlesSlot = articles.querySelector("slot");

fetch("https://dev.to/api/articles?username=felladrin")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article: DevToArticle) => {
      const articleElement = template
        .querySelector("template")
        .content.cloneNode(true) as Element;

      articleElement.querySelector("span").innerText =
        article.readable_publish_date;

      const anchor = articleElement.querySelector("a");
      anchor.href = article.url;
      anchor.innerText = article.title;
      anchor.dataset.toggle = "tooltip";
      anchor.dataset.placement = "right";
      anchor.dataset.title = article.description;

      articlesSlot.appendChild(articleElement);
    });
  })
  .catch((error) => console.error(error));
