import { State } from "./types";
import toScore from "./score";

export default function RenderScoreSystem(setState: (state: any) => void) {
  return (delta: number, state: State) => {
    const { clearLines } = state;

    setState({ score: toScore(clearLines) });

    return state;
  };
}
