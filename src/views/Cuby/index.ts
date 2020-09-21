import { Graphics } from "pixi.js";
import Block from "./Block";
import Face from "./Face";

type Color =
  | "blue"
  | "red"
  | "yellow"
  | "green"
  | "orange"
  | "purple"
  | "indigo";
export default function Cuby(type: Color, size: number) {
  const [x, y, w, h, r] = [0, 0, size, size, 4];

  const color = {
    blue: { light: 0x49bdff, dark: 0x2d97f7 },
    red: { light: 0xf71d30, dark: 0xc11837 },
    yellow: { light: 0xffdb01, dark: 0xfe8601 },
    green: { light: 0x26e552, dark: 0x1da84b },
    orange: { light: 0xfe8602, dark: 0xfe5e02 },
    purple: { light: 0xbf5af2, dark: 0xaf52de },
    indigo: { light: 0x6b69da, dark: 0x5e5ce6 },
  }[type];

  const context = new Graphics();
  Block({ x, y, w, h, r, color }, context);
  Face({ w, h }, context);

  return context;
}
