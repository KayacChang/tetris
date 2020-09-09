import { Application, Container } from "pixi.js";
import Grid from "../views/grid";
import { Store } from "redux";
import { State } from "../reducers";
import { mapTable } from "../utils";

export default function RenderSystem(app: Application) {
  const config = {
    gridWidth: 40,
    gridHeight: 40,
  };

  let layout = new Container();

  return (delta: number, store: Store<State>) => {
    const { playField, tetrominos } = store.getState();

    app.stage.removeChild(layout);
    layout = Grid({
      table: playField,
      ...config,
    });
    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);
    app.stage.addChild(layout);

    tetrominos.forEach(({ blocks, rotate, position, color }) => {
      const grid = Grid({
        table: mapTable((value) => (value ? color : value), blocks[rotate]),
        ...config,
      });

      grid.position.set(
        position.x * config.gridWidth,
        position.y * config.gridHeight
      );

      layout.addChild(grid);
    });
  };
}
