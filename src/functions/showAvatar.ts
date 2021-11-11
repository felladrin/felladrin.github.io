import WinBox from "winbox";

export function showAvatar() {
  new WinBox({
    title: "📷",
    url: "images/avatar.webp",
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    background: "#bd8b01",
    top: 50,
    class: ["no-min", "no-full"],
  });
}
