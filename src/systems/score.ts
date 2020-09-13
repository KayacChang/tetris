export default function toScore(lines: number[]) {
  return lines.reduce(
    ({ scores, totalLines }, cleared) => ({
      scores:
        scores +
        [0, 40, 100, 300, 1200][cleared] * (Math.floor(totalLines / 10) + 1),
      totalLines: totalLines + cleared,
    }),
    { scores: 0, totalLines: 0 }
  ).scores;
}
