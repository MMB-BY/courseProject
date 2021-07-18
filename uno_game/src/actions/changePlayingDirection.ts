import { ActionOutputType } from "../types/actionOutputType";

export function changePlayingDirection(direction: string): ActionOutputType {
  const newDirection =
    direction === "CLOCKWISE" ? "COUNTER_CLOCKWISE" : "CLOCKWISE";
  return {
    type: "CHANGE_PLAYING_DIRECTION",
    payload: newDirection,
  };
}
