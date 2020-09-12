import { State } from "./types";

export default function UpdatePlayFieldSystem() {
  return (delta: number, state: State) => {
    if (!state.current || !state.current.lock) {
      return state;
    }

    const playfield = state.playfield;

    const { blocks, rotate, position, color } = state.current;

    blocks[rotate].forEach((row, py) => {
      row.forEach((exist, px) => {
        if (exist) playfield[py + position.y][px + position.x] = color;
      });
    });

    return { ...state, playfield };
  };
}
