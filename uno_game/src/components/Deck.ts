import { createDeck } from "../utils/createDeck";
import { CardType } from "../types/cardType";

export class Deck {
  cards: CardType[];
  constructor(cards = createDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

  removeCards(indexToRemove: number[]) {
    const newCards: CardType[] = [];
    this.cards.forEach((el) => {
      if (el.numberInDeck) {
        if (!indexToRemove.includes(el.numberInDeck)) {
          newCards.push(el);
        }
      }
    });
    this.cards = newCards;
  }
}
