import { Deck } from "../components/Deck";
import { ActionOutputType } from "../types/actionOutputType";
export function resetDeckAction(cardsToRemove: number[]): ActionOutputType {
  const newDeck = new Deck();
  newDeck.shuffle();
  newDeck.removeCards(cardsToRemove);
  return {
    type: "RESET_DECK",
    payload: newDeck,
  };
}
