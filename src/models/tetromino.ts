export type TetrominoType = "I" | "J" | "L" | "O" | "S" | "T" | "Z";

export interface ITetromino {
  type: TetrominoType;
  color: number;
  blocks: number[][];
  rotate: 0 | 1 | 2 | 3;
  position: [number, number];
}

function Blocks(type: TetrominoType, blocks: number[]) {
  const len = ["I", "O"].includes(type) ? 4 : 3;

  return blocks.map((binary) =>
    binary
      .toString(2)
      .padStart(len ** 2, "0")
      .split("")
      .map(Number)
  );
}

function base(
  type: TetrominoType,
  color: number,
  blocks: number[]
): ITetromino {
  return {
    type,
    color,
    blocks: Blocks(type, blocks),
    rotate: 0,
    position: [0, 0],
  };
}

export function Tetromino(type: TetrominoType) {
  if (type === "I") {
    return base(type, 0x00f0f0, [3840, 8738, 240, 17476]);
  }

  if (type === "J") {
    return base(type, 0x0000f0, [312, 210, 57, 150]);
  }

  if (type === "L") {
    return base(type, 0xf0a000, [120, 147, 60, 402]);
  }

  if (type === "O") {
    return base(type, 0xf0f000, [1632, 1632, 1632, 1632]);
  }

  if (type === "S") {
    return base(type, 0x00f000, [240, 153, 30, 306]);
  }

  if (type === "T") {
    return base(type, 0xa000f0, [184, 154, 58, 178]);
  }

  if (type === "Z") {
    return base(type, 0xf00000, [408, 90, 51, 180]);
  }

  throw new Error(`Not support this tetromino type: ${type}`);
}
