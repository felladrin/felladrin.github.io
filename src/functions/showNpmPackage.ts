import WinBox from "winbox/src/js/winbox.js";

export function showNpmPackage(packageName: string) {
  new WinBox(packageName, {
    url: `https://yarn.pm/${packageName}#readme`,
    x: "center",
    y: "center",
    width: "40%",
    height: "75%",
    border: "0.3em",
    background: "#117cad",
    top: 50,
  });
}
