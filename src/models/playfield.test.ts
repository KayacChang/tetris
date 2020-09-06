import PlayField from "./playfield";

describe("PlayField", () => {
  test("playfield is 2d array", () => {
    const field = PlayField();
    expect(field).toBeInstanceOf(Array);
    expect(field[0]).toBeInstanceOf(Array);
  });

  const row = 20;
  const col = 10;

  test(`playfield which is ${row} x ${col} matrix`, () => {
    const field = PlayField();
    expect(field).toHaveLength(row);

    field.forEach((row) => expect(row).toHaveLength(col));
  });
});
