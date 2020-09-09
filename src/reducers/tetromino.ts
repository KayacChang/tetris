import { ITetromino } from "../models/tetromino";

const ADD_TETROMINO = "ADD_TETROMINO";
const UPDATE_TETROMINO = "UPDATE_TETROMINO";

interface AddTetrominoAction {
  type: typeof ADD_TETROMINO;
  payload: ITetromino;
}

interface UpdateTetrominoAction {
  type: typeof UPDATE_TETROMINO;
  payload: ITetromino[];
}

export type TetrominoAction = AddTetrominoAction | UpdateTetrominoAction;

export function addTetromino(payload: ITetromino): AddTetrominoAction {
  return {
    type: ADD_TETROMINO,
    payload,
  };
}

export function updateTetromino(payload: ITetromino[]): UpdateTetrominoAction {
  return {
    type: UPDATE_TETROMINO,
    payload,
  };
}

const init: ITetromino[] = [];

export function tetrominoReducer(state = init, action: TetrominoAction) {
  if (action.type === ADD_TETROMINO) {
    return [...state, action.payload];
  }

  if (action.type === UPDATE_TETROMINO) {
    return action.payload;
  }

  return state;
}
