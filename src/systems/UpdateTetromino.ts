import { System, State } from "../types";
import { cloneTable } from "../utils";

export default function UpdateTetrominoSystem(): System {
  return (delta: number, { playField, tetrominos, ...state }: State) => {
    playField = cloneTable(playField);

    tetrominos.forEach(({ blocks, rotate, position, color }) => {
      blocks[rotate].forEach((row, py) => {
        row.forEach((exist, px) => {
          const { x, y } = position;

          exist && (playField[py + y][px + x] = color);
        });
      });
    });

    return { ...state, playField, tetrominos };
  };
}
