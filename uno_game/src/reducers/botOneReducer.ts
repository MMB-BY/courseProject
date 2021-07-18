import { ActionOutputType } from "../types/actionOutputType";

const initialState = {
  botOneCards: [],
  topCard: { suit: "white", value: "0" },
  active: "WAITING",
};

export function botOneReducer(state = initialState, action: ActionOutputType) {
  switch (action.type) {
    case "GET_CARD_BOT_ONE":
      return { ...state, botOneCards: action.payload };

    case "THROW_CARD_BOT_ONE":
      return { ...state, topCard: action.payload };

    case "DELETE_CARD_BOT_ONE":
      return { ...state, botOneCards: action.payload };

    case "GET_SEVEN_CARDS_BOT_ONE":
      return { ...state, botOneCards: action.payload };
    case "BOT_ONE_ACTIVE_TOGGLE":
      return { ...state, active: action.payload };
    default:
      return state;
  }
}
