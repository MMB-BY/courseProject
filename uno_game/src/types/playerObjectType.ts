import { CardType } from "./cardType";

export type PlayerObjectType = {
  playerCards: CardType[];
  topCard: CardType;
  active: string;
};
export type BotOneObjectType = {
  botOneCards: CardType[];
  topCard: CardType;
  active: string;
};
export type BotTwoObjectType = {
  botTwoCards: CardType[];
  topCard: CardType;
  active: string;
};
export type BotThreeObjectType = {
  botThreeCards: CardType[];
  topCard: CardType;
  active: string;
};
