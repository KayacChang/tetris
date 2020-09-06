import { Graphics, Container } from "pixi.js";

type GridProps = {
  px: number;
  py: number;
  width: number;
  height: number;
  lineWidth: number;
  lineColor?: number;
};
function Grid({
  px,
  py,
  width,
  height,
  lineWidth,
  lineColor = 0xffffff,
}: GridProps) {
  const grid = new Graphics();

  grid.lineStyle(lineWidth, lineColor);
  grid.drawRect(0, 0, width - lineWidth, height - lineWidth);
  grid.endFill();

  grid.position.set(px * width, py * height);

  return grid;
}

type Props = {
  table: number[][];
  gridWidth: number;
  gridHeight: number;
  gap: number;
};
export default function GridLayout({
  table,
  gridWidth,
  gridHeight,
  gap,
}: Props) {
  const layout = new Container();

  layout.addChild(
    ...table
      .map((row, py) =>
        row
          .map((_, px) =>
            Grid({
              px,
              py,
              width: gridWidth,
              height: gridHeight,
              lineWidth: gap,
            })
          )
          .flat()
      )
      .flat()
  );

  return layout;
}
