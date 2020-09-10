import { Application } from "pixi.js";
import SystemManager from "./systems/Manager";
import RenderSystem from "./systems/Render";
import { throttle } from "./utils";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import SpawnTetrominoSystem from "./systems/SpawnTetromino";
import DropTetrominoSystem from "./systems/DropTetromino";
import MoveTetrominoSystem from "./systems/MoveTetromino";

export default function main(app: Application) {
  const systems = SystemManager(
    app,
    createStore(
      rootReducer,
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  systems.add(SpawnTetrominoSystem());
  systems.add(throttle(1000, DropTetrominoSystem()));
  systems.add(throttle(1000, MoveTetrominoSystem()));
  systems.add(throttle(1000, RenderSystem(app)));
}
