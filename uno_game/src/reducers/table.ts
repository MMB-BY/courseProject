import { ActionOutputType } from "../types/actionOutputType";

const initialState = {
  topCard: { suit: "white", value: "0" },
  playingDirection: "COUNTER_CLOCKWISE",
};

export function tableReducer(state = initialState, action: ActionOutputType) {
  switch (action.type) {
    case "START_GAME":
      return { ...state, topCard: action.payload };

    case "CHANGE_PLAYING_DIRECTION":
      return { ...state, playingDirection: action.payload };

    case "FLIP_CARD":
      return { ...state, topCard: action.payload };

    case "CHANGE_COLOR":
      return { ...state, topCard: action.payload };

    default:
      return state;
  }
}
