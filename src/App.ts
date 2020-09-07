import { Application } from "pixi.js";
import PlayField from "./models/playfield";
import RenderSystem from "./systems/render";

export default function main(app: Application) {
  const render = RenderSystem(app);

  app.ticker.add(() => {
    // Game Timing
    // Input
    // Game Logic
    const playfield = PlayField();

    // Render
    render(playfield);
  });
}
