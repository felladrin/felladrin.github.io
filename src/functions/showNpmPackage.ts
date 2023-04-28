import WinBox from "winbox";

export function showNpmPackage(packageName: string) {
  new WinBox({
    title: packageName,
    url: `https://yarn.pm/${packageName}#readme`,
    x: "center",
    y: "center",
    width: "90%",
    height: "80%",
    border: "0.3em",
    background: "#117cad",
    class: ["no-min", "no-full"],
  });
}
