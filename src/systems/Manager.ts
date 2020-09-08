import { Application } from "pixi.js";
import { System, State } from "../types";

export default function SystemManager({ ticker }: Application, state: State) {
  const systems: System[] = [];

  const update = (state: State, system: System) =>
    system(ticker.deltaMS, state);

  ticker.add(() => {
    state = systems.reduce(update, { ...state });
  });

  return {
    add: (...system: System[]) => systems.push(...system),
  };
}
