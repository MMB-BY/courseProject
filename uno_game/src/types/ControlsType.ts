import { Deck } from "../components/Deck";
import { ActionOutputType } from "./actionOutputType";
import { CardType } from "./cardType";
import {
  BotOneObjectType,
  BotThreeObjectType,
  BotTwoObjectType,
  PlayerObjectType,
} from "./playerObjectType";

export interface ControlsProps {
  cards: PlayerObjectType;
  botOne: BotOneObjectType;
  botTwo: BotTwoObjectType;
  botThree: BotThreeObjectType;

  deck: Deck;
  controlsGetCard: (
    cards: CardType[],
    playerCards: CardType[]
  ) => ActionOutputType;
  startGame: (cards: CardType[]) => ActionOutputType;
  changeColor: (color: string) => ActionOutputType;
  playerActiveToggle: (currentState: string) => ActionOutputType;
  botOneActiveToggle: (currentState: string) => ActionOutputType;
  botTwoActiveToggle: (currentState: string) => ActionOutputType;
  botThreeActiveToggle: (currentState: string) => ActionOutputType;
  direction: string;
  gameEnded: boolean;
  resetDeck: (cardsToRemove: number[]) => ActionOutputType;
}
