import { ActionOutputType } from "../../types/actionOutputType";

export function botOneActiveToggle(currentState: string): ActionOutputType {
  return {
    type: "BOT_ONE_ACTIVE_TOGGLE",
    payload: currentState,
  };
}

export function botTwoActiveToggle(currentState: string): ActionOutputType {
  return {
    type: "BOT_TWO_ACTIVE_TOGGLE",
    payload: currentState,
  };
}

export function botThreeActiveToggle(currentState: string): ActionOutputType {
  return {
    type: "BOT_THREE_ACTIVE_TOGGLE",
    payload: currentState,
  };
}
