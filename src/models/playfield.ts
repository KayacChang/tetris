import { fillTable } from "../utils";
import { IPlayField } from "../types";

export default function PlayField(): IPlayField {
  return fillTable(20, 10, 0xffffff);
}
