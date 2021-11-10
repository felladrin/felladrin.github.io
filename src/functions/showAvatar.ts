import WinBox from "winbox/src/js/winbox.js";

export function showAvatar() {
  new WinBox("📷", {
    url: "images/avatar.webp",
    x: "center",
    y: "center",
    width: "460px",
    height: "460px",
    background: "#bd8b01",
    top: 50,
  });
}
