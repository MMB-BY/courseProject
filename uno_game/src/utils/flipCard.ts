import { CardType } from "../types/cardType";

export function flipCard(cards: CardType[]): CardType {
  const newCard = cards.pop() as CardType;
  return newCard;
}
