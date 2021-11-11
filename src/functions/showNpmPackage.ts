import WinBox from "winbox";

export function showNpmPackage(packageName: string) {
  new WinBox({
    title: packageName,
    url: `https://yarn.pm/${packageName}#readme`,
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    border: "0.3em",
    background: "#117cad",
    top: 50,
    max: true,
    class: ["no-min", "no-full"],
  });
}
