import { Application, Container } from "pixi.js";
import Grid from "../views/grid";
import { System } from "../types";
import { throttle } from "../utils";

export default function RenderSystem(app: Application): System {
  let layout: Container | undefined;

  return throttle(1000, (delta, state) => {
    layout && app.stage.removeChild(layout);

    layout = Grid({
      table: state.playField,
      gridWidth: 40,
      gridHeight: 40,
    });

    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);

    app.stage.addChild(layout);

    return state;
  });
}
