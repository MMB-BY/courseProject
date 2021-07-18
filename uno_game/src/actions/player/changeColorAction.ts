import { ActionOutputType } from "../../types/actionOutputType";

export function changeColorAction(color: string): ActionOutputType {
  return {
    type: "CHANGE_COLOR",
    payload: { suit: `${color}`, value: "color" },
  };
}
