import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import { flipCard } from "../../utils/flipCard";

export function flipCardAction(cards: CardType[]): ActionOutputType {
  const newCard = flipCard(cards);
  return {
    type: "FLIP_CARD",
    payload: newCard,
  };
}
