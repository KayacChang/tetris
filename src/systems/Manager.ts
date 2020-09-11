import { Application } from "pixi.js";
import { System, State } from "./types";

export default function SystemManager({ ticker }: Application, state: State) {
  const systems: System[] = [];

  const update = (system: System) => (state = system(ticker.deltaMS, state));

  ticker.add(() => systems.forEach(update));

  return {
    add: (...system: System[]) => systems.unshift(...system),
  };
}
