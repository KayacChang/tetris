export type TetrominoType = "I" | "J" | "L" | "O" | "S" | "T" | "Z";

export interface ITetromino {
  type: TetrominoType;
  color: number;
  blocks: number[][][];
  rotate: 0 | 1 | 2 | 3;
  position: { x: number; y: number };
}

export type IPlayField = number[][];

export type State = {
  playField: IPlayField;
  tetrominos: ITetromino[];
};

export type System = (delta: number, state: State) => State;
