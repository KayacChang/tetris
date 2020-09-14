import { State } from "./types";
import { Tetromino } from "../models/tetromino";
import { randomPick } from "../utils";

export default function SpawnTetrominoSystem() {
  return (delta: number, state: State) => {
    const { current, playfield } = state;

    if (!current || current?.lock) {
      const tetromino = Tetromino(
        randomPick(["I", "J", "L", "O", "S", "T", "Z"])
      );

      Object.assign(tetromino.position, {
        x: Math.floor(playfield[0].length / 2 - 2),
        y: -1,
      });

      return { ...state, current: tetromino };
    }

    return state;
  };
}
