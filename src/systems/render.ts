import { Application, Container } from "pixi.js";
import Grid from "../views/grid";

export default function RenderSystem(app: Application) {
  let layout: Container | undefined;

  return (table: number[][]) => {
    layout && app.stage.removeChild(layout);

    layout = Grid({
      table,
      gridWidth: 40,
      gridHeight: 40,
    });

    layout.position.set(app.screen.width / 2, app.screen.height / 2);
    layout.pivot.set(layout.width / 2, layout.height / 2);

    app.stage.addChild(layout);
  };
}
