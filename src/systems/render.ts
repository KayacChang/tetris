import { Application, Container } from "pixi.js";
import Grid from "../views/grid";
import { mapTable } from "../utils";
import { when, always } from "ramda";
import { ITetromino } from "../models/tetromino";
import { State } from "./types";

export default function RenderSystem(app: Application) {
  const config = {
    gridWidth: 40,
    gridHeight: 40,
  };

  let layout = new Container();

  function fresh(table: number[][]) {
    app.stage.removeChild(layout);
    layout = Grid({
      table: mapTable(always(0xffffff), table),
      ...config,
    });
    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);
    app.stage.addChild(layout);
  }

  function tetrominoToGrid({ blocks, rotate, position, color }: ITetromino) {
    const grid = Grid({
      table: mapTable(when(Boolean, always(color)), blocks[rotate]),
      ...config,
    });

    grid.position.set(
      position.x * config.gridWidth,
      position.y * config.gridHeight
    );

    return grid;
  }

  return (delta: number, state: State) => {
    const { playfield, tetrominos } = state;

    fresh(playfield);
    tetrominos.length && layout.addChild(...tetrominos.map(tetrominoToGrid));

    return state;
  };
}
