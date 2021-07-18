import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import { flipCard } from "../../utils/flipCard";

export function getCardAction(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  const newCard = flipCard(cards);
  playerCards.push(newCard);
  return {
    type: "GET_CARD",
    payload: playerCards,
  };
}
