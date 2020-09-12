import { ITetromino } from "../models/tetromino";
import { mergeWith, add, equals } from "ramda";
import { State } from "./types";
import { inRange } from "../utils";

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

      const hitBlock = playField?.[y]?.[x];
      const hitBottom = y >= playField.length;
      const hitBorder = !inRange(0, playField[0].length - 1, x);

      if (hitBlock || hitBottom || hitBorder) {
        isCollide = true;
      }
    });
  });

  return isCollide;
}

export default function MoveTetrominoSystem() {
  return (delta: number, state: State) => {
    if (!state.current) {
      return state;
    }

    if (collide(state.playfield, state.current)) {
      Object.assign(state.current, {
        lock: equals(state.current.vector, { x: 0, y: 1 }),
        vector: { x: 0, y: 0 },
      });

      return state;
    }

    const { position, vector } = state.current;
    Object.assign(state.current, {
      position: mergeWith(add, position, vector),
      vector: { x: 0, y: 0 },
    });

    return state;
  };
}
