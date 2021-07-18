import { Card } from "../components/Card";
import { CardType } from "../types/cardType";

const SUITS = ["red", "green", "yellow", "blue"];
const VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "stop",
  "flow",
  "+2",
];

export function createDeck(): CardType[] {
  let numberInDeck: number = 0;
  const newDeck = SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      numberInDeck++;
      return new Card(suit, value, numberInDeck);
    }).concat(
      VALUES.map((value) => {
        numberInDeck++;
        return new Card(suit, value, numberInDeck);
      })
    );
  })
    .concat(
      Array.from({ length: 4 }).map((_) => {
        numberInDeck++;
        return new Card("black", "+4", numberInDeck);
      })
    )
    .concat(
      Array.from({ length: 4 }).map((_) => {
        numberInDeck++;
        return new Card("black", "color", numberInDeck);
      })
    );
  return newDeck;
}
