export class Card {
  suit: string;
  value: string;
  numberInDeck: number;
  constructor(suit: string, value: string, numberInDeck: number) {
    this.suit = suit;
    this.value = value;
    this.numberInDeck = numberInDeck;
  }
}
