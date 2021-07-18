import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import { flipCard } from "../../utils/flipCard";

export function getCardActionBotOne(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  const newCard = flipCard(cards);
  playerCards.push(newCard);
  return {
    type: "GET_CARD_BOT_ONE",
    payload: playerCards,
  };
}

export function getCardActionBotTwo(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  const newCard = flipCard(cards);
  playerCards.push(newCard);
  return {
    type: "GET_CARD_BOT_TWO",
    payload: playerCards,
  };
}

export function getCardActionBotThree(
  cards: CardType[],
  playerCards: CardType[]
): ActionOutputType {
  const newCard = flipCard(cards);
  playerCards.push(newCard);
  return {
    type: "GET_CARD_BOT_THREE",
    payload: playerCards,
  };
}
