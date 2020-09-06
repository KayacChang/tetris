
# Scoring System 

reference by [Tetris Series #1 — Scoring System](https://www.codewars.com/kata/5da9af1142d7910001815d32/)

The scoring formula is built on the idea that more difficult line clears should be awarded more points.
For example, a single line clear is worth `40` points, 
clearing four lines at once (known as a Tetris) is worth `1200`.

A level multiplier is also used.
The game starts at level `0`.
The level increases every `10` lines you clear.
Note that after increasing the level, the total number of cleared lines is not reset.

For our task you can use this table:

| Level | Points for 1 line                          | Points for 2 lines | Points for 3 lines | Points for 4 lines |
| ----- | ------------------------------------------ | ------------------ | ------------------ | ------------------ |
| 0     | 40                                         | 100                | 300                | 1200               |
| 1     | 80                                         | 200                | 600                | 2400               |
| 2     | 120                                        | 300                | 900                | 3600               |
| 3     | 160                                        | 400                | 1200               | 4800               |
| ...   |                                            |                    |                    |                    |
| 7     | 320                                        | 800                | 2400               | 9600               |
| ...   | For level n you must determine the formula |
