import { Graphics } from "pixi.js";
import Trapezoid from "./Trapezoid";

type Props = {
  x: number;
  y: number;
  w: number;
  h: number;
  r: number;
  color: { light: number; dark: number };
};
export default function Block(
  { x, y, w, h, r, color }: Props,
  block: Graphics
) {
  const offset = (Math.sqrt(w * h) * 8) / 100;
  const inner = {
    x: x + offset,
    y: y + offset,
    w: w - 2 * offset,
    h: h - 2 * offset,
  };

  // Border
  block.beginFill(0x000000);
  block.drawRoundedRect(x, y, w, h, r);
  block.endFill();

  // Content
  block.beginFill(color.light);
  block.drawRoundedRect(inner.x, inner.y, inner.w, inner.h, r);
  block.endFill();

  // Reflect 1
  Trapezoid(
    {
      paths: [
        [offset, offset],
        [offset + inner.w, offset],
        [inner.w, 2 * offset],
        [2 * offset, 2 * offset],
      ],
      color: 0xffffff,
    },
    block
  );

  // Reflect 2
  Trapezoid(
    {
      paths: [
        [offset, offset],
        [2 * offset, 2 * offset],
        [2 * offset, inner.h],
        [offset, inner.h + offset],
      ],
      color: 0xffffff,
    },
    block
  );

  // Reflect 3
  Trapezoid(
    {
      paths: [
        [2 * offset, inner.h],
        [inner.w, inner.h],
        [offset + inner.w, inner.h + offset],
        [offset, inner.h + offset],
      ],
      color: color.dark,
    },
    block
  );

  // Reflect 4
  Trapezoid(
    {
      paths: [
        [inner.w, inner.h],
        [offset + inner.w, inner.h + offset],
        [offset + inner.w, offset],
        [inner.w, 2 * offset],
      ],
      color: color.dark,
    },
    block
  );

  return block;
}
