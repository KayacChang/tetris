import { Graphics, Point } from "pixi.js";

type Props = {
  paths: number[][];
  color: number;
};
export default function Trapezoid({ paths, color }: Props, context: Graphics) {
  context.beginFill(color);
  context.drawPolygon(paths.map(([x, y]) => new Point(x, y)));
  context.endFill();

  return context;
}
