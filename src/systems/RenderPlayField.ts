import { Application, Container } from "pixi.js";
import { State } from "./types";

import Grid from "../views/Grid";
import Block from "../views/Block";
import { fillTable } from "../utils";
import { ITetromino } from "../models/tetromino";

export default function RenderPlayFieldSystem(app: Application) {
  const gridWidth = 40;
  const gridHeight = 40;

  const Layout = Grid(({ px, py }) =>
    Block({
      px,
      py,
      width: gridWidth,
      height: gridHeight,
      fillColor: 0xffffff,
    })
  );

  const layout = Layout(fillTable(20, 10, 1));
  layout.position.set(app.screen.width / 2, app.screen.height / 2);
  layout.pivot.set(layout.width / 2, layout.height / 2);
  app.stage.addChild(layout);

  const PlayField = Grid(({ px, py, color }) =>
    Block({
      px,
      py,
      width: gridWidth,
      height: gridHeight,
      fillColor: color,
    })
  );

  let it = new Container();
  layout.addChild(it);

  function updatePlayField(playfield: number[][]) {
    layout.removeChild(it);
    it = PlayField(playfield);
    layout.addChild(it);
  }

  const Tetromino = (color: number) =>
    Grid(({ px, py }) =>
      Block({
        px,
        py,
        width: gridWidth,
        height: gridHeight,
        fillColor: color,
      })
    );

  let prev = new Container();

  function updateCurrent(current?: ITetromino) {
    if (!current) {
      return;
    }

    layout.removeChild(prev);

    prev = Tetromino(current.color)(current.blocks[current.rotate]);

    prev.position.set(
      current.position.x * gridWidth,
      current.position.y * gridHeight
    );

    layout.addChild(prev);
  }

  return (delta: number, state: State) => {
    const { playfield, current } = state;

    updatePlayField(playfield);
    updateCurrent(current);

    return state;
  };
}
