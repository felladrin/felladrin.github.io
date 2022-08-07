import WinBox from "winbox";
import { avatar } from "../components/avatar";

export function showAvatar() {
  const avatarWindow = new WinBox({
    title: "📷",
    x: "center",
    y: "center",
    width: "60%",
    height: "60%",
    background: "#bd8b01",
    top: 50,
    class: ["no-min", "no-full"],
  });

  avatarWindow.body.appendChild(avatar);
}
