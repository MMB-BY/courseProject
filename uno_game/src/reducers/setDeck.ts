import { Deck } from "../components/Deck";
import { ActionOutputType } from "../types/actionOutputType";
const newDeck = new Deck();
newDeck.shuffle();

const initialState = {
  deck: newDeck,
};

export function setDeck(state = initialState, action: ActionOutputType) {
  switch (action.type) {
    case "SET_DECK":
      return { ...state, deck: action.payload };
    case "RESET_DECK":
      return { ...state, deck: action.payload };
    default:
      return state;
  }
}
