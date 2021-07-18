import { Deck } from "../components/Deck";
import { ActionOutputType } from "./actionOutputType";
import { CardType } from "./cardType";
import {
  BotOneObjectType,
  BotThreeObjectType,
  BotTwoObjectType,
  PlayerObjectType,
} from "./playerObjectType";

export interface BotOneProps {
  playerCards: PlayerObjectType;
  botOne: BotOneObjectType;
  botTwo: BotTwoObjectType;
  botThree: BotThreeObjectType;
  playerActiveToggle: (currentState: string) => ActionOutputType;
  getCardBotOne: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  getCard: (cards: CardType[], playerCards: CardType[]) => ActionOutputType;
  throw: (actualCard: CardType) => ActionOutputType;
  delete: (cards: CardType[], id: number) => void;
  botOneActiveToggle: (currentState: string) => ActionOutputType;
  botTwoActiveToggle: (currentState: string) => ActionOutputType;
  botThreeActiveToggle: (currentState: string) => ActionOutputType;
  changePlayingDirection: (currentDirection: string) => void;
  changeColor: (color: string) => ActionOutputType;
  deckOnTable: Deck;
  cardOnTop: CardType;
  direction: string;
  gameEnded: boolean;
  resetDeck: (cardsToRemove: number[]) => ActionOutputType;
}
