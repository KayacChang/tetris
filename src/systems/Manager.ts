import { Application } from "pixi.js";
import { System, State } from "../types";

export default function SystemManager({ ticker }: Application, state: State) {
  const systems: System[] = [];

  ticker.add(() => {
    const delta = ticker.deltaMS;

    state = systems.reduce((state, update) => update(delta, state), {
      ...state,
    });
  });

  return {
    add: (...system: System[]) => systems.push(...system),
  };
}
