import { Graphics, Container } from "pixi.js";

type Color = number;

type GridProps = {
  px: number;
  py: number;
  width: number;
  height: number;
  fillColor?: Color;
  lineWidth?: number;
  lineColor?: Color;
};
function GridItem({
  px,
  py,
  width,
  height,
  fillColor,
  lineWidth = 0,
  lineColor = 0xffffff,
}: GridProps) {
  const grid = new Graphics();

  grid.lineStyle(lineWidth, lineColor);
  grid.beginFill(fillColor);
  grid.drawRect(0, 0, width - lineWidth, height - lineWidth);
  grid.endFill();

  grid.position.set(px * width, py * height);

  return grid;
}

const getGridItem = (props: Omit<GridProps, "px" | "py">) => (
  px: number,
  py: number,
  fillColor: number
) => Boolean(fillColor) && GridItem({ px, py, fillColor, ...props });

type Props = {
  table: Color[][];
  gridWidth: number;
  gridHeight: number;
};
export default function Grid({ table, gridWidth, gridHeight }: Props) {
  const item = getGridItem({
    width: gridWidth,
    height: gridHeight,
  });

  const layout = new Container();

  layout.addChild(
    ...table
      .map(
        (row, py) =>
          row
            .map((color, px) => item(px, py, color))
            .flat()
            .filter(Boolean) as Container[]
      )
      .flat()
  );

  return layout;
}
