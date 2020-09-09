import { combineReducers } from "redux";
import { tetrominoReducer } from "./tetromino";
import { playFieldReducer } from "./playfield";

export const rootReducer = combineReducers({
  tetrominos: tetrominoReducer,
  playField: playFieldReducer,
});

export type State = ReturnType<typeof rootReducer>;
