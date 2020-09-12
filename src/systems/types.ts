import { ITetromino } from "../models/tetromino";

export type State = {
  playfield: number[][];
  current?: ITetromino;
};

export type System = (delta: number, state: State) => State;
