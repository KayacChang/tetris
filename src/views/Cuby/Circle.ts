import { Graphics } from "pixi.js";

type Props = {
  x: number;
  y: number;
  r: number;
  color: number;
};
export default function Circle({ x, y, r, color }: Props, context: Graphics) {
  context.beginFill(color);
  context.drawCircle(x, y, r);
  context.endFill();
  return context;
}
