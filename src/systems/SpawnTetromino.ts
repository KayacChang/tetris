import { Store } from "redux";
import { State } from "../reducers";
import { addTetromino } from "../reducers/tetromino";
import { Tetromino } from "../models/tetromino";

export default function SpawnTetrominoSystem() {
  let once = true;

  return (delta: number, store: Store<State>) => {
    if (once) {
      store.dispatch(addTetromino(Tetromino("I")));

      once = false;
    }
  };
}
