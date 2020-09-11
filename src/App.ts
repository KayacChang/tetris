import { Application } from "pixi.js";
import SystemManager from "./systems/Manager";
import RenderSystem from "./systems/Render";
import SpawnTetrominoSystem from "./systems/SpawnTetromino";
import DropTetrominoSystem from "./systems/DropTetromino";
import MoveTetrominoSystem from "./systems/MoveTetromino";
import PlayField from "./models/playfield";
import throttle from "./systems/throttle";

export default function main(app: Application) {
  const systems = SystemManager(app, {
    playfield: PlayField(),
    tetrominos: [],
    current: undefined,
  });

  systems.add(SpawnTetrominoSystem());
  systems.add(throttle(1000, DropTetrominoSystem()));
  systems.add(throttle(1000, MoveTetrominoSystem()));
  systems.add(throttle(1000, RenderSystem(app)));
}
