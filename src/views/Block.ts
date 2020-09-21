import { Graphics } from "pixi.js";

type Color = number;

type Props = {
  px: number;
  py: number;
  width: number;
  height: number;
  fillColor?: Color;
  lineWidth?: number;
  lineColor?: Color;
};
export default function Block({
  px,
  py,
  width,
  height,
  fillColor,
  lineWidth = 0,
  lineColor = 0xffffff,
}: Props) {
  const it = new Graphics();

  it.lineStyle(lineWidth, lineColor);
  it.beginFill(fillColor);
  it.drawRect(0, 0, width - lineWidth, height - lineWidth);
  it.endFill();

  it.position.set(px * width, py * height);

  return it;
}
