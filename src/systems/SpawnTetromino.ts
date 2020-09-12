import { State } from "./types";
import { Tetromino } from "../models/tetromino";
import { randomPick } from "../utils";

export default function SpawnTetrominoSystem() {
  return (delta: number, state: State) => {
    if (!state.current || state.current?.lock) {
      const current = Tetromino(
        randomPick(["I", "J", "L", "O", "S", "T", "Z"])
      );

      state.current = current;
    }

    return state;
  };
}
