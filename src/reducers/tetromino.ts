import { ITetromino } from "../models/tetromino";

const ADD_TETROMINO = "ADD_TETROMINO";

interface AddTetrominoAction {
  type: typeof ADD_TETROMINO;
  payload: ITetromino;
}

export type TetrominoAction = AddTetrominoAction;

const init: ITetromino[] = [];

export function tetrominoReducer(state = init, action: TetrominoAction) {
  return state;
}
