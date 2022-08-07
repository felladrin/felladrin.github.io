export function parseHtmlString(htmlString: string) {
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content;
}
