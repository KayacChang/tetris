import { State } from "./types";
import { Tetromino } from "../models/tetromino";

function randomPick<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function SpawnTetrominoSystem() {
  return (delta: number, state: State) => {
    if (!state.current || state.current?.lock) {
      const current = Tetromino(
        randomPick(["I", "J", "L", "O", "S", "T", "Z"])
      );

      state.tetrominos.push(current);
      state.current = current;
    }

    return state;
  };
}
