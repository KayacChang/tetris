import { Store } from "redux";
import { State } from "../reducers";
import { updateTetromino } from "../reducers/tetromino";
import { pipe, add, clamp } from "ramda";

export default function DropTetrominoSystem() {
  return (delta: number, store: Store<State>) => {
    let { playField, tetrominos } = store.getState();

    const addOne = pipe(add(1), clamp(0, playField.length));

    tetrominos = tetrominos.map(({ position, ...rest }) => ({
      ...rest,
      position: { x: position.x, y: addOne(position.y) },
    }));

    store.dispatch(updateTetromino(tetrominos));
  };
}
