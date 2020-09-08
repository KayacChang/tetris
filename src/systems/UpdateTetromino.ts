import { System, State } from "../types";
import { cloneTable } from "../utils";

export default function UpdateTetrominoSystem(): System {
  return (delta: number, state: State) => {
    const { playField, tetrominos } = state;

    const results = cloneTable(playField);

    tetrominos.forEach(({ blocks, rotate, position, color }) => {
      blocks[rotate].forEach((row, py) => {
        row.forEach((exist, px) => {
          const { x, y } = position;

          exist && (results[py + y][px + x] = color);
        });
      });
    });

    return { ...state, playField: results };
  };
}
