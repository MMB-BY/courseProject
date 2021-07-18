import { ActionOutputType } from "../types/actionOutputType";
import { Deck } from "../components/Deck";
import {
  BotOneObjectType,
  BotThreeObjectType,
  BotTwoObjectType,
  PlayerObjectType,
} from "../types/playerObjectType";
import { CardType } from "./cardType";

export interface AppProps {
  startGame: (cards: CardType[]) => ActionOutputType;
  getCard: (cards: CardType[], playerCards: CardType[]) => ActionOutputType;
  player: PlayerObjectType;
  throwCard: (actualCard: CardType) => ActionOutputType;
  deleteCard: (cards: CardType[], id: number) => ActionOutputType;
  getSevenCards: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  playerActiveToggle: (currentState: string) => ActionOutputType;
  getSevenCardsBotOne: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  getCardBotOne: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  throwCardBotOne: (actualCard: CardType) => ActionOutputType;
  deleteCardBotOne: (cards: CardType[], id: number) => ActionOutputType;
  botOneActiveToggle: (currentState: string) => ActionOutputType;
  getSevenCardsBotTwo: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  getCardBotTwo: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  throwCardBotTwo: (actualCard: CardType) => ActionOutputType;
  deleteCardBotTwo: (cards: CardType[], id: number) => ActionOutputType;
  botTwoActiveToggle: (currentState: string) => ActionOutputType;
  getSevenCardsBotThree: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  getCardBotThree: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  throwCardBotThree: (actualCard: CardType) => ActionOutputType;
  deleteCardBotThree: (cards: CardType[], id: number) => ActionOutputType;
  botThreeActiveToggle: (currentState: string) => ActionOutputType;
  changePlayingDirection: (currentDirection: string) => ActionOutputType;
  table: { topCard: CardType; playingDirection: string };
  changeColor: (color: string) => ActionOutputType;
  botOne: BotOneObjectType;
  botTwo: BotTwoObjectType;
  botThree: BotThreeObjectType;
  deck: { deck: Deck };
  resetDeck: () => ActionOutputType;
}

export interface AppStore {
  deck: { deck: Deck };
  table: { topCard: CardType; playingDirection: string };
  player: PlayerObjectType;
  botOne: BotOneObjectType;
  botTwo: BotTwoObjectType;
  botThree: BotThreeObjectType;
}
