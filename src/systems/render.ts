import { Application, Container } from "pixi.js";
import Grid from "../views/grid";
import { Store } from "redux";
import { State } from "../reducers";
import { mapTable } from "../utils";
import { when, always } from "ramda";
import { ITetromino } from "../models/tetromino";

export default function RenderSystem(app: Application) {
  const config = {
    gridWidth: 40,
    gridHeight: 40,
  };

  let layout = new Container();

  function fresh(table: number[][]) {
    app.stage.removeChild(layout);
    layout = Grid({
      table,
      ...config,
    });
    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);
    app.stage.addChild(layout);

    return layout;
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

  return (delta: number, store: Store<State>) => {
    const { playField, tetrominos } = store.getState();

    fresh(playField).addChild(...tetrominos.map(tetrominoToGrid));
  };
}
