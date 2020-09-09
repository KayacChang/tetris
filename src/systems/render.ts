import { Application, Container } from "pixi.js";
import Grid from "../views/grid";
import { Store } from "redux";
import { State } from "../reducers";

export default function RenderSystem(app: Application) {
  let layout: Container | undefined;

  return (delta: number, store: Store<State>) => {
    const { playField } = store.getState();

    layout && app.stage.removeChild(layout);

    layout = Grid({
      table: playField,
      gridWidth: 40,
      gridHeight: 40,
    });

    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);

    app.stage.addChild(layout);
  };
}
