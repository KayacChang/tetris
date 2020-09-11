import { ITetromino } from "../models/tetromino";
import { mergeWith, add } from "ramda";
import { State } from "./types";

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
  return (delta: number, state: State) => {
    if (!state.current) {
      return state;
    }

    if (collide(state.playfield, state.current)) {
      Object.assign(state.current, {
        lock: true,
        vector: { x: 0, y: 0 },
      });

      return { ...state, current: undefined };
    }

    const { position, vector } = state.current;

    Object.assign(state.current, {
      position: mergeWith(add, position, vector),
      vector: { x: 0, y: 0 },
    });

    return state;
  };
}
