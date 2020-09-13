import { Application } from "pixi.js";
import SystemManager from "./systems/Manager";
import RenderPlayFieldSystem from "./systems/RenderPlayField";
import SpawnTetrominoSystem from "./systems/SpawnTetromino";
import DropTetrominoSystem from "./systems/DropTetromino";
import MoveTetrominoSystem from "./systems/MoveTetromino";
import PlayField from "./models/playfield";
import throttle from "./systems/throttle";
import UpdatePlayFieldSystem from "./systems/UpdatePlayField";
import ControlSystem from "./systems/Control";
import RenderScoreSystem from "./systems/RenderScore";

export default function main(app: Application, setState: (state: any) => void) {
  const systems = SystemManager(app, {
    playfield: PlayField(),
    current: undefined,
    clearLines: [],
  });

  systems.add(
    throttle(100, ControlSystem()),
    SpawnTetrominoSystem(),
    throttle(1000, DropTetrominoSystem()),
    MoveTetrominoSystem(),
    UpdatePlayFieldSystem(),
    RenderPlayFieldSystem(app),
    RenderScoreSystem(setState)
  );
}
