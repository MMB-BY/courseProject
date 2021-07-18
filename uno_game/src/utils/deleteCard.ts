import { CardType } from "../types/cardType";

export function deleteCard(cards: CardType[], id: number) {
  const newCards = cards.filter((_, i) => i !== Number(id));
  return newCards;
}
