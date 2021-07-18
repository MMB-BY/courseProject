import { ActionOutputType } from "../types/actionOutputType";

const initialState = {
  playerCards: [],
  topCard: { suit: "white", value: "0" },
  active: "ACTIVE",
};

export function playerReducer(state = initialState, action: ActionOutputType) {
  switch (action.type) {
    case "GET_CARD":
      return { ...state, playerCards: action.payload };

    case "THROW_CARD":
      return { ...state, topCard: action.payload };

    case "DELETE_CARD":
      return { ...state, playerCards: action.payload };

    case "GET_SEVEN_CARDS":
      return { ...state, playerCards: action.payload };

    case "PLAYER_ACTIVE_TOGGLE":
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
