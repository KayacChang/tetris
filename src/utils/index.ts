import { curry } from "ramda";

export function fill<T>(len: number, value: T): T[] {
  return Array(len).fill(value);
}

export function fillTable<T>(row: number, col: number, value: T): T[][] {
  if (row < 1 || col < 1) {
    throw new Error(`row and col should be large than 0.`);
  }

  return Array(row)
    .fill([])
    .map(() => fill(col, value));
}

export function cloneTable<T>(table: T[][]) {
  return table.map((arr) => arr.slice());
}

type MapFunc<T> = (value: T, [x, y]: [number, number]) => T;
export const mapTable = curry(<T>(func: MapFunc<T>, table: T[][]) => {
  return table.map((row, y) => {
    return row.map((value, x) => func(value, [x, y]));
  });
});

export function randomPick<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export function inRange(min: number, max: number, value: number) {
  return min <= value && value <= max;
}
