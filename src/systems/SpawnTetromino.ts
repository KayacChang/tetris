import { State } from "./types";
import { Tetromino } from "../models/tetromino";

export default function SpawnTetrominoSystem() {
  let once = true;

  return (delta: number, state: State) => {
    if (once) {
      const current = Tetromino("I");

      state.tetrominos.push(current);
      state.current = current;

      once = false;
    }

    return state;
  };
}
