import { Application } from "pixi.js";
import PlayField from "./models/playfield";
import GridLayout from "./views/grid";

export default function main(app: Application) {
  const layout = GridLayout({
    table: PlayField(),
    gridWidth: 40,
    gridHeight: 40,
    gap: 1,
  });

  layout.position.set(app.screen.width / 2, app.screen.height / 2);
  layout.pivot.set(layout.width / 2, layout.height / 2);

  app.stage.addChild(layout);
}
