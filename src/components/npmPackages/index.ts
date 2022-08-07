import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "./index.html?raw";
import { fetchNpmPackages } from "../../functions/fetchNpmPackages";
import { showNpmPackage } from "../../functions/showNpmPackage";

const template = parseHtmlString(htmlString);

export const npmPackages = template.firstElementChild;

const packageTemplate = template.querySelector("template");

fetchNpmPackages().then((npmsQueryResult) => {
  for (const result of npmsQueryResult.results) {
    const packageDetails = packageTemplate.content.cloneNode(true) as Element;

    ((button) => {
      button.innerText = result.package.name;
      button.addEventListener("click", () =>
        showNpmPackage(result.package.name)
      );
    })(packageDetails.querySelector("button"));

    packageDetails.querySelector("span").innerText = result.package.description;

    npmPackages
      .querySelector("slot")
      .appendChild(packageDetails.firstElementChild);
  }
});
