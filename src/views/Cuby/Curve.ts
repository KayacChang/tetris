import { Graphics } from "pixi.js";

type Point = { x: number; y: number };
type Props = {
  w: number;
  from: Point;
  end: Point;
  controlA: Point;
  controlB: Point;
};

export default function Curve(
  { w, from, end, controlA, controlB }: Props,
  context: Graphics
) {
  context.lineStyle(w);
  context.moveTo(from.x, from.y);
  context.bezierCurveTo(
    controlA.x,
    controlA.y,
    controlB.x,
    controlB.y,
    end.x,
    end.y
  );

  return context;
}
