import { Application } from "pixi.js";
import PlayField from "./models/playfield";
import RenderSystem from "./systems/render";
import { Tetromino, ITetromino } from "./models/tetromino";
import { cloneTable } from "./utils";

function updateTetromino(
  playfield: number[][],
  { blocks, rotate, color, position }: ITetromino
) {
  const results = cloneTable(playfield);

  blocks[rotate].forEach((row, py) => {
    row.forEach((exist, px) => {
      const { x, y } = position;

      exist && (results[py + y][px + x] = color);
    });
  });

  return results;
}

export default function main(app: Application) {
  const render = RenderSystem(app);

  app.ticker.add(() => {
    // Game Timing
    // Input
    // Game Logic
    const playfield = PlayField();
    const I = Tetromino("I");

    const results = updateTetromino(playfield, I);

    // Render
    render(results);
  });
}
