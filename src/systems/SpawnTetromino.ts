import { State } from "./types";
import { Tetromino } from "../models/tetromino";

export default function SpawnTetrominoSystem() {
  return (delta: number, state: State) => {
    if (!state.current || state.current?.lock) {
      const current = Tetromino("I");

      state.tetrominos.push(current);
      state.current = current;
    }

    return state;
  };
}
