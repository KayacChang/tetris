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
export function mapTable<T>(func: MapFunc<T>, table: T[][]) {
  return table.map((row, y) => {
    return row.map((value, x) => func(value, [x, y]));
  });
}

export function throttle(ms: number, func: Function) {
  let timePassed = ms;

  return (delta: number, ...args: any[]) => {
    if (timePassed < ms) {
      timePassed += delta;

      return;
    }
    timePassed = 0;

    return func(delta, ...args);
  };
}
