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

function KeyBoard() {
  const pressing = new Set<ACTION>();

  window.addEventListener("keydown", ({ key }) => {
    const action = KEYMAP[key];

    action !== undefined && pressing.add(action);
  });
  window.addEventListener("keyup", ({ key }) => {
    const action = KEYMAP[key];

    action !== undefined && pressing.delete(action);
  });

  return () => pressing;
}

export default function ControlSystem() {
  const getKey = KeyBoard();

  return (delta: number, state: State) => {
    if (!state.current) {
      return state;
    }
    const { current } = state;
    const pressing = getKey();

    if (pressing.has(ACTION.LEFT)) {
      current.vector.x = -1;
    }

    if (pressing.has(ACTION.RIGHT)) {
      current.vector.x = 1;
    }

    if (pressing.has(ACTION.DOWN)) {
      current.vector.y = 1;
    }

    return state;
  };
}
