import { fillTable } from "../utils";

export type TetrominoType = "I" | "J" | "L" | "O" | "S" | "T" | "Z";

export interface ITetromino {
  type: TetrominoType;
  color: number;
  blocks: number[][][];
  rotate: 0 | 1 | 2 | 3;
}

function groupBy<T>(num: number, arr: T[]) {
  const newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, num));
  }

  return newArr;
}

function rotate(blocks: number[][]) {
  const result = fillTable(blocks.length, blocks[0].length, 0);

  for (let y = 0; y < blocks.length; y++) {
    for (let x = 0; x < blocks[y].length; x++) {
      result[x][blocks.length - 1 - y] = blocks[y][x];
    }
  }

  return result;
}

function Blocks(type: TetrominoType, binary: number) {
  const len = ["I", "O"].includes(type) ? 4 : 3;

  const results: number[][][] = [];

  for (let i = 0; i < 4; i++) {
    const block = groupBy(
      len,
      binary
        .toString(2)
        .padStart(len ** 2, "0")
        .split("")
        .map(Number)
    );

    if (i === 0) {
      results.push(block);
    } else {
      results.push(rotate(results[i - 1]));
    }
  }

  return results;
}

function base(type: TetrominoType, color: number, binary: number): ITetromino {
  return {
    type,
    color,
    blocks: Blocks(type, binary),
    rotate: 0,
  };
}

export function Tetromino(type: TetrominoType) {
  if (type === "I") {
    return base(type, 0x00f0f0, 3840);
  }

  if (type === "J") {
    return base(type, 0x0000f0, 312);
  }

  if (type === "L") {
    return base(type, 0xf0a000, 120);
  }

  if (type === "O") {
    return base(type, 0xf0f000, 1632);
  }

  if (type === "S") {
    return base(type, 0x00f000, 240);
  }

  if (type === "T") {
    return base(type, 0xa000f0, 184);
  }

  if (type === "Z") {
    return base(type, 0xf00000, 408);
  }

  throw new Error(`Not support this tetromino type: ${type}`);
}
