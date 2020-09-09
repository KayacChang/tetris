import PlayField from "../models/playfield";

const UPDATE_PLAYFIELD = "UPDATE_PLAYFIELD";

interface UpdatePlayFieldAction {
  type: typeof UPDATE_PLAYFIELD;
  payload: number[][];
}

export type PlayFieldAction = UpdatePlayFieldAction;

const init = PlayField();

export function playFieldReducer(state = init, action: PlayFieldAction) {
  return state;
}
