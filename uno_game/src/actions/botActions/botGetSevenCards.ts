import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import { flipCard } from "../../utils/flipCard";

export function getSevenCardActionBotOne(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  for (let i = 0; i < 7; i++) {
    playerCards.push(flipCard(cards));
  }
  return {
    type: "GET_SEVEN_CARDS_BOT_ONE",
    payload: playerCards,
  };
}

export function getSevenCardActionBotTwo(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  for (let i = 0; i < 7; i++) {
    playerCards.push(flipCard(cards));
  }
  return {
    type: "GET_SEVEN_CARDS_BOT_TWO",
    payload: playerCards,
  };
}

export function getSevenCardActionBotThree(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  for (let i = 0; i < 7; i++) {
    playerCards.push(flipCard(cards));
  }
  return {
    type: "GET_SEVEN_CARDS_BOT_THREE",
    payload: playerCards,
  };
}
