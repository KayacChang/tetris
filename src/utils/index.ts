export function fillTable(row: number, col: number, fill: number): number[][] {
  if (row < 1 || col < 1) {
    throw new Error(`the grid row and col should be large than 0.`);
  }

  return Array(row)
    .fill([])
    .map(() => Array(col).fill(fill));
}

export function cloneTable(table: number[][]) {
  return table.map((arr) => arr.slice());
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
