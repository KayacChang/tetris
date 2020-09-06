export default function getScore(arr: number[]) {
  return arr.reduce(
    ({ scores, totalLines }, lines) => ({
      scores:
        scores +
        [0, 40, 100, 300, 1200][lines] * (Math.floor(totalLines / 10) + 1),
      totalLines: totalLines + lines,
    }),
    { scores: 0, totalLines: 0 }
  ).scores;
}
