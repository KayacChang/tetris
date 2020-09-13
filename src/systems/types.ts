import { ITetromino } from "../models/tetromino";

export type State = {
  playfield: number[][];
  current?: ITetromino;
  clearLines: number[];
};

export type System = (delta: number, state: State) => State;
