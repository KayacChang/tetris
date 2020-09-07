import Grid from "./grid";
import { Container } from "pixi.js";

describe("GridLayout", () => {
  const table = [[0, 0, 0]];
  const gridWidth = 20;
  const gridHeight = 10;
  const gap = 0;

  const layout = Grid({ table, gridWidth, gridHeight, gap });

  test("grid layout width and height", () => {
    expect(layout.width).toEqual(gridWidth * table[0].length);
    expect(layout.height).toEqual(gridHeight * table.length);
  });

  test(`grid children match table`, () => {
    expect(layout.children.length).toEqual(table.flat().length);
  });

  test(`grid children width and height`, () => {
    layout.children.forEach((_grid) => {
      const grid = _grid as Container;
      expect(grid.width).toEqual(gridWidth);
      expect(grid.height).toEqual(gridHeight);
    });
  });
});
