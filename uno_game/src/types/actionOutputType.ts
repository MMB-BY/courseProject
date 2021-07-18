import { Deck } from "../components/Deck";
import { CardType } from "./cardType";

export type ActionOutputType = {
  type: string;
  payload: string | CardType[] | CardType | Deck;
};
