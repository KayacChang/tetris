import { Store } from "redux";
import { State } from "../reducers";
import { updatePlayField } from "../reducers/playfield";

export default function UpdateTetrominoSystem() {
  return (delat: number, store: Store<State>) => {
    const { tetrominos, playField } = store.getState();

    tetrominos.forEach(({ blocks, rotate, color, position }) => {
      blocks[rotate].forEach((row, py) => {
        row.forEach((exist, px) => {
          if (!exist) {
            return;
          }

          const { x, y } = position;

          playField[py + y][px + x] = color;
        });
      });
    });

    store.dispatch(updatePlayField(playField));
  };
}
