# Tetris
Tetris project using create react app with pixijs.

## How to play
todo

## Project
### Design Principle
Using functional programming,
use pure function with function composition,
reduce the side effect,
single source of truth about game state.

### Core Systems
#### Render
- Use Pixi.js to render
- Create new data by frame update
- Game assets binding // todo

#### Control
- throttle keyboard event to frame update
- action system to mapping different input device // todo

### HUD
- React for HUD
- Tetrion // todo
- Game Scene // todo
- Begin Scene // todo
- Menu // todo

### Game Logic
#### Scores
- NES scores system

#### Tetromino
- pure data without any method
- data compression using binary algorithm
- spawn location at 20-21
- super rotation system
- wall kick

#### Playfield
- pure data without any method
- store the current game state

### Domain Implement
#### Gameplay
- [] Next Piece
- [] Hold Piece
- [] Hard Drop
- [] ARE
- [] DAS
- [] Lock delay

#### Rotation System
- [ ] ORS
- [x] SRS
- [ ] ARS
- [ ] NRS
- [ ] DTET

#### Spin
- [] T-Spin
- [] I-Spin