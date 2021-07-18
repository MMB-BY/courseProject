import { flipCard } from "../utils/flipCard";
import { CardType } from "../types/cardType";
import { ActionOutputType } from "../types/actionOutputType";

export function startGameAction(cards: CardType[]): ActionOutputType {
  let newCard: CardType;
  newCard = flipCard(cards);
  if (newCard.suit === "black") {
    newCard = flipCard(cards);
  }

  return {
    type: "START_GAME",
    payload: newCard,
  };
}
