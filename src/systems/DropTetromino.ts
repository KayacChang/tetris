import { Store } from "redux";
import { State } from "../reducers";
import { updateTetromino } from "../reducers/tetromino";
import { ITetromino } from "../models/tetromino";

function drop(tetrominos: ITetromino[]) {
  return tetrominos.map(({ position, ...rest }) => ({
    ...rest,
    position: { x: position.x, y: position.y + 1 },
  }));
}

export default function DropTetrominoSystem() {
  return (delta: number, store: Store<State>) => {
    const { tetrominos } = store.getState();

    store.dispatch(updateTetromino(drop(tetrominos)));
  };
}
