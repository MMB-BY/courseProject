import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import { deleteCard } from "../../utils/deleteCard";

export function deleteCardActionBotOne(
  cards: CardType[],
  id: number
): ActionOutputType {
  return {
    type: "DELETE_CARD_BOT_ONE",
    payload: deleteCard(cards, id),
  };
}

export function deleteCardActionBotTwo(
  cards: CardType[],
  id: number
): ActionOutputType {
  return {
    type: "DELETE_CARD_BOT_TWO",
    payload: deleteCard(cards, id),
  };
}

export function deleteCardActionBotThree(
  cards: CardType[],
  id: number
): ActionOutputType {
  return {
    type: "DELETE_CARD_BOT_THREE",
    payload: deleteCard(cards, id),
  };
}
