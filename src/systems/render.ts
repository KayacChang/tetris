import { Application, Container } from "pixi.js";
import Grid from "../views/grid";
import { mapTable } from "../utils";
import { always, identity, ifElse, when } from "ramda";
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
      table: mapTable(ifElse(Boolean, identity, always(0xffffff)), table),
      ...config,
    });
    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);
    app.stage.addChild(layout);
  }

  return (delta: number, state: State) => {
    const { playfield, current } = state;

    fresh(playfield);

    if (current) {
      const tetromino = Grid({
        table: mapTable(
          when(Boolean, always(current.color)),
          current.blocks[current.rotate]
        ),
        ...config,
      });

      tetromino.position.set(
        current.position.x * config.gridWidth,
        current.position.y * config.gridHeight
      );

      layout.addChild(tetromino);
    }

    return state;
  };
}
