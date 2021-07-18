import { ActionOutputType } from "../../types/actionOutputType";

export function playerActiveToggle(currentState: string): ActionOutputType {
  return {
    type: "PLAYER_ACTIVE_TOGGLE",
    payload: currentState,
  };
}
