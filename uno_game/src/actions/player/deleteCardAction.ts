import { deleteCard } from "../../utils/deleteCard";
import { CardType } from "../../types/cardType";
import { ActionOutputType } from "../../types/actionOutputType";

export function deleteCardAction(
  cards: CardType[],
  id: number
): ActionOutputType {
  return {
    type: "DELETE_CARD",
    payload: deleteCard(cards, id),
  };
}
