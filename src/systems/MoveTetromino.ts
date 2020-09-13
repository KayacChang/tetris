import { ITetromino } from "../models/tetromino";
import { mergeWith, add, equals } from "ramda";
import { State } from "./types";
import { inRange } from "../utils";

function inPlayField(playField: number[][], x: number) {
  return inRange(0, playField[0].length - 1, x);
}

function collide(
  playField: number[][],
  { blocks, rotate, vector, position }: ITetromino
) {
  const hit = {
    block: false,
    bottom: false,
    border: false,
    nudge: 0,
  };

  blocks[rotate].forEach((row, py) => {
    row.forEach((exist, px) => {
      if (!exist) {
        return;
      }

      const x = position.x + vector.x + px;
      const y = position.y + vector.y + py;

      const hitBlock = playField?.[y]?.[x];
      const hitBottom = y > playField.length - 1;
      const hitBorder = !inPlayField(playField, x);

      if (hitBlock) {
        hit.block = true;
      }

      if (hitBottom) {
        hit.bottom = true;
      }

      if (hitBorder) {
        hit.border = true;

        const x = position.x + px;
        const shouldNudge = !inPlayField(playField, x);

        if (shouldNudge) {
          const half = playField[0].length / 2;
          hit.nudge = position.x > half ? -1 : 1;
        }
      }
    });
  });

  return hit;
}

export default function MoveTetrominoSystem() {
  return (delta: number, state: State) => {
    if (!state.current) {
      return state;
    }

    const { playfield, current } = state;
    const hit = collide(playfield, current);

    if (hit.border) {
      const { position } = current;
      Object.assign(current, {
        position: { x: position.x + hit.nudge, y: position.y },
        vector: { x: 0, y: 0 },
      });

      return state;
    }

    if (hit.bottom || hit.block) {
      Object.assign(current, {
        lock: equals(current.vector, { x: 0, y: 1 }),
        vector: { x: 0, y: 0 },
      });

      return state;
    }

    const { position, vector } = current;
    Object.assign(current, {
      position: mergeWith(add, position, vector),
      vector: { x: 0, y: 0 },
    });

    return state;
  };
}
