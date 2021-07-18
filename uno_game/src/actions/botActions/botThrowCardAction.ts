import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";

export function throwCardActionBotOne(actualCard: CardType): ActionOutputType {
  return {
    type: "THROW_CARD_BOT_ONE",
    payload: actualCard,
  };
}

export function throwCardActionBotTwo(actualCard: CardType): ActionOutputType {
  return {
    type: "THROW_CARD_BOT_TWO",
    payload: actualCard,
  };
}

export function throwCardActionBotThree(
  actualCard: CardType
): ActionOutputType {
  return {
    type: "THROW_CARD_BOT_THREE",
    payload: actualCard,
  };
}
