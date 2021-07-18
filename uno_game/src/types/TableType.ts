import { Deck } from "../components/Deck";
import { ActionOutputType } from "./actionOutputType";
import { CardType } from "./cardType";
import {
  BotOneObjectType,
  BotThreeObjectType,
  BotTwoObjectType,
  PlayerObjectType,
} from "./playerObjectType";

export interface TableProps {
  deck: { deck: Deck };
  startGame: (cards: CardType[]) => ActionOutputType;
  player: PlayerObjectType;
  throwCard: (actualCard: CardType) => ActionOutputType;
  deleteCard: (cards: CardType[], id: number) => ActionOutputType;
  playerActiveToggle: (currentState: string) => ActionOutputType;
  botOne: BotOneObjectType;
  botOneThrowCard: (actualCard: CardType) => ActionOutputType;
  botOneDeleteCard: (cards: CardType[], id: number) => ActionOutputType;
  botOneActiveToggle: (currentState: string) => ActionOutputType;
  getCardBotOne: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  controlsGetCard: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  controlsGetSevenCards: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  controlsGetSevenCardsBotOne: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  controlsGetSevenCardsBotTwo: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  controlsGetSevenCardsBotThree: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  botTwo: BotTwoObjectType;
  botTwoThrowCard: (actualCard: CardType) => ActionOutputType;
  botTwoDeleteCard: (cards: CardType[], id: number) => ActionOutputType;
  botTwoActiveToggle: (currentState: string) => ActionOutputType;
  getCardBotTwo: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  botThree: BotThreeObjectType;
  botThreeThrowCard: (actualCard: CardType) => ActionOutputType;
  botThreeDeleteCard: (cards: CardType[], id: number) => ActionOutputType;
  botThreeActiveToggle: (currentState: string) => ActionOutputType;
  getCardBotThree: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  table: { topCard: CardType; playingDirection: string };
  changePlayingDirection: (currentDirection: string) => ActionOutputType;
  changeColor: (color: string) => ActionOutputType;
  resetDeck: (cardsToRemove: number[]) => ActionOutputType;
}
