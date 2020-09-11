import { System, State } from "./types";

export default function throttle(ms: number, system: System) {
  let timePassed = ms;

  return (delta: number, state: State) => {
    if (timePassed < ms) {
      timePassed += delta;

      return state;
    }

    timePassed = 0;

    return system(delta, state);
  };
}
