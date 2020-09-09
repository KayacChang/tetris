import { Application } from "pixi.js";
import SystemManager from "./systems/Manager";
import RenderSystem from "./systems/Render";
import { throttle } from "./utils";
import { createStore } from "redux";
import { rootReducer } from "./reducers";

export default function main(app: Application) {
  const systems = SystemManager(app, createStore(rootReducer));

  systems.add(throttle(1000, RenderSystem(app)));
}
