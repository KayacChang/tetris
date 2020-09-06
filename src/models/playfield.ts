function Grid(row: number, col: number) {
  if (row < 1 || col < 1) {
    throw `the grid row and col should be large than 0.`;
  }

  return Array(row)
    .fill([])
    .map(() => Array(col).fill(0));
}

export default function PlayField() {
  return Grid(20, 10);
}
