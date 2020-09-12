import { curry } from "ramda";

export function fillTable<T>(row: number, col: number, fill: T): T[][] {
  if (row < 1 || col < 1) {
    throw new Error(`the grid row and col should be large than 0.`);
  }

  return Array(row)
    .fill([])
    .map(() => Array(col).fill(fill));
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
