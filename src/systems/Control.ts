import { State } from "./types";

enum ACTION {
  DOWN,
  LEFT,
  RIGHT,
}

const KEYMAP: Record<string, ACTION> = {
  s: ACTION.DOWN,
  a: ACTION.LEFT,
  d: ACTION.RIGHT,
};

export default function ControlSystem() {
  const pressing = new Set<ACTION>();
  window.addEventListener("keydown", ({ key }) => {
    const action = KEYMAP[key];

    action ?? pressing.add(action);
  });

  window.addEventListener("keyup", ({ key }) => {
    const action = KEYMAP[key];

    action ?? pressing.delete(action);
  });

  return (delta: number, state: State) => {
    if (pressing.has(ACTION.LEFT)) {
    }

    return state;
  };
}
