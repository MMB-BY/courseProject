import { ActionOutputType } from "../types/actionOutputType";

const initialState = {
  botThreeCards: [],
  topCard: { suit: "white", value: "0" },
  active: "WAITING",
};

export function botThreeReducer(
  state = initialState,
  action: ActionOutputType
) {
  switch (action.type) {
    case "GET_CARD_BOT_THREE":
      return { ...state, botThreeCards: action.payload };

    case "THROW_CARD_BOT_THREE":
      return { ...state, topCard: action.payload };

    case "DELETE_CARD_BOT_THREE":
      return { ...state, botThreeCards: action.payload };

    case "GET_SEVEN_CARDS_BOT_THREE":
      return { ...state, botThreeCards: action.payload };
    case "BOT_THREE_ACTIVE_TOGGLE":
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
