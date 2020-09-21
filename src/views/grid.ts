import { Container, DisplayObject } from "pixi.js";

type Props = {
  px: number;
  py: number;
  color: number;
};
type Factory = (props: Props) => DisplayObject;

export default function Grid(Item: Factory) {
  return (table: number[][]) => {
    const layout = new Container();

    const children = table
      .map(
        (row, py) =>
          row
            .map((color, px) => Boolean(color) && Item({ px, py, color }))
            .flat()
            .filter(Boolean) as Container[]
      )
      .flat();

    if (children.length) {
      layout.addChild(...children);
    }

    return layout;
  };
}
