import { Store } from "redux";
import { State } from "../reducers";
import { updateTetromino } from "../reducers/tetromino";
import { ITetromino } from "../models/tetromino";
import { mergeWith, add } from "ramda";

function collide(
  playField: number[][],
  { blocks, rotate, vector, position }: ITetromino
) {
  let isCollide = false;

  blocks[rotate].forEach((row, py) => {
    row.forEach((exist, px) => {
      if (!exist) {
        return;
      }

      const x = position.x + vector.x + px;
      const y = position.y + vector.y + py;

      isCollide = !Boolean(playField?.[y]?.[x]);
    });
  });

  return isCollide;
}

export default function MoveTetrominoSystem() {
  return (delta: number, store: Store<State>) => {
    const { tetrominos, playField } = store.getState();

    store.dispatch(
      updateTetromino(
        tetrominos.map((tetromino) => {
          if (collide(playField, tetromino)) {
            return {
              ...tetromino,
              lock: true,
              vector: { x: 0, y: 0 },
            };
          }

          const { position, vector } = tetromino;
          return {
            ...tetromino,
            position: mergeWith(add, position, vector),
            vector: { x: 0, y: 0 },
          };
        })
      )
    );
  };
}
