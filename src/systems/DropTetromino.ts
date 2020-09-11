import { State } from "./types";

export default function DropTetrominoSystem() {
  return (delta: number, state: State) => {
    if (state.current) {
      state.current.vector.y = 1;
    }

    return state;
  };
}
