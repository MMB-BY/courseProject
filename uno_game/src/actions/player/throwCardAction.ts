import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";

export function throwCardAction(actualCard: CardType): ActionOutputType {
  return {
    type: "THROW_CARD",
    payload: actualCard,
  };
}
