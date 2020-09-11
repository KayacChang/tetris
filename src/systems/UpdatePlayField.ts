import { State } from "./types";
import PlayField from "../models/playfield";

export default function UpdatePlayFieldSystem() {
  return (delta: number, state: State) => {
    const playfield = PlayField();

    state.tetrominos.forEach(({ blocks, rotate, position, lock }) => {
      blocks[rotate].forEach((row, py) => {
        row.forEach((exist, px) => {
          if (!exist || !lock) {
            return;
          }

          playfield[py + position.y][px + position.x] = 0;
        });
      });
    });

    return { ...state, playfield };
  };
}
