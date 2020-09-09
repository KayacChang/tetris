import { ITetromino } from "../models/tetromino";

const ADD_TETROMINO = "ADD_TETROMINO";

interface AddTetrominoAction {
  type: typeof ADD_TETROMINO;
  payload: ITetromino;
}

export type TetrominoAction = AddTetrominoAction;

export function addTetromino(payload: ITetromino): AddTetrominoAction {
  return {
    type: ADD_TETROMINO,
    payload,
  };
}

const init: ITetromino[] = [];

export function tetrominoReducer(state = init, action: TetrominoAction) {
  if (action.type === ADD_TETROMINO) {
    const tetromino = action.payload as ITetromino;

    return [...state, tetromino];
  }

  return state;
}
