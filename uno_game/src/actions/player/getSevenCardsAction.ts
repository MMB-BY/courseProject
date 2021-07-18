import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import { flipCard } from "../../utils/flipCard";

export function getSevenCardAction(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  for (let i = 0; i < 7; i++) {
    playerCards.push(flipCard(cards));
  }
  return {
    type: "GET_SEVEN_CARDS",
    payload: playerCards,
  };
}
