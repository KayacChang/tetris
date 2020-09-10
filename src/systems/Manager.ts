import { Application } from "pixi.js";
import { Store } from "redux";
import { State } from "../reducers";

type System = (delta: number, store: Store<State>) => void;

export default function SystemManager(
  { ticker }: Application,
  store: Store<State>
) {
  const systems: System[] = [];

  const update = (system: System) => system(ticker.deltaMS, store);

  ticker.add(() => systems.forEach(update));

  return {
    add: (...system: System[]) => systems.unshift(...system),
  };
}
