import { Application } from "pixi.js";
import PlayField from "./models/playfield";
import SystemManager from "./systems/Manager";
import RenderSystem from "./systems/Render";
import { throttle } from "./utils";

export default function main(app: Application) {
  const systems = SystemManager(app, {
    playField: PlayField(),
    tetrominos: [],
  });

  systems.add(throttle(1000, RenderSystem(app)));
}
