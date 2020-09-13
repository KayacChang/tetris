import { all, filter, complement } from "ramda";
import { fill } from "../utils";
import { State } from "./types";

const notFillout = complement(all(Boolean));

function fillTo20(list: number[][]) {
  while (list.length < 20) {
    list = [fill(10, 0), ...list];
  }
  return list;
}

export default function UpdatePlayFieldSystem() {
  return (delta: number, state: State) => {
    if (!state.current || !state.current.lock) {
      return state;
    }

    const { playfield, current, clearLines } = state;
    const { blocks, rotate, position, color } = current;

    blocks[rotate].forEach((row, py) => {
      row.forEach((exist, px) => {
        if (exist) playfield[py + position.y][px + position.x] = color;
      });
    });

    const rest = filter(notFillout)(playfield);
    const clear = playfield.length - rest.length;

    return {
      ...state,
      playfield: fillTo20(rest),
      clearLines: clear ? [...clearLines, clear] : clearLines,
    };
  };
}
