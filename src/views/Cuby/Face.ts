import { Graphics } from "pixi.js";
import Circle from "./Circle";
import Curve from "./Curve";

type Props = {
  w: number;
  h: number;
};
export default function Face({ w, h }: Props, context: Graphics) {
  const unit = (Math.sqrt(w * h) * 8) / 100;

  // Eyes 1
  Circle(
    { x: 3.8 * unit, y: 5.5 * unit, r: unit / 2, color: 0x000000 },
    context
  );
  // Eyes 2
  Circle(
    { x: w - 3.8 * unit, y: 5.5 * unit, r: unit / 2, color: 0x000000 },
    context
  );
  // Mouse
  const A = { x: 5 * unit, y: 6.5 * unit };
  const B = { x: w - 5 * unit, y: 6.5 * unit };

  context.beginFill(0x000000);
  Curve(
    {
      w: unit / 4,
      from: A,
      end: B,
      controlA: { x: (B.x - A.x) * (1 / 4) + A.x, y: 6.2 * unit },
      controlB: { x: (B.x - A.x) * (3 / 4) + A.x, y: 6.2 * unit },
    },
    context
  );

  Curve(
    {
      w: unit / 4,
      from: A,
      end: B,
      controlA: { x: (B.x - A.x) * (1 / 20) + A.x, y: 7.8 * unit },
      controlB: { x: (B.x - A.x) * (19 / 20) + A.x, y: 7.8 * unit },
    },
    context
  );
  context.endFill();

  context.beginFill(0xff8502);
  context.drawEllipse(w / 2, h / 2 + (unit * 3) / 4, unit, unit / 2);
  context.endFill();

  return context;
}
