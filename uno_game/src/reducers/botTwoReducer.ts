import { ActionOutputType } from "../types/actionOutputType";

const initialState = {
  botTwoCards: [],
  topCard: { suit: "white", value: "0" },
  active: "WAITING",
};

export function botTwoReducer(state = initialState, action: ActionOutputType) {
  switch (action.type) {
    case "GET_CARD_BOT_TWO":
      return { ...state, botTwoCards: action.payload };

    case "THROW_CARD_BOT_TWO":
      return { ...state, topCard: action.payload };

    case "DELETE_CARD_BOT_TWO":
      return { ...state, botTwoCards: action.payload };

    case "GET_SEVEN_CARDS_BOT_TWO":
      return { ...state, botTwoCards: action.payload };
    case "BOT_TWO_ACTIVE_TOGGLE":
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
