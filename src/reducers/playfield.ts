import PlayField from "../models/playfield";

const UPDATE_PLAYFIELD = "UPDATE_PLAYFIELD";

interface UpdatePlayFieldAction {
  type: typeof UPDATE_PLAYFIELD;
  payload: number[][];
}

export type PlayFieldAction = UpdatePlayFieldAction;

export function updatePlayField(payload: number[][]): UpdatePlayFieldAction {
  return {
    type: UPDATE_PLAYFIELD,
    payload,
  };
}

const init = PlayField();

export function playFieldReducer(state = init, action: PlayFieldAction) {
  return state;
}
