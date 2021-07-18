import { Deck } from "../components/Deck";
import { ActionOutputType } from "./actionOutputType";
import { CardType } from "./cardType";
import { PlayerObjectType } from "./playerObjectType";

export interface PlayerProps {
  playerActiveToggle: (currentState: string) => ActionOutputType;
  getCard: (cards: CardType[], playerCards: CardType[]) => ActionOutputType;
  throwCard: (actualCard: CardType) => ActionOutputType;
  deleteCard: (cards: CardType[], id: number) => ActionOutputType;
  botOneActiveToggle: (currentState: string) => ActionOutputType;
  botTwoActiveToggle: (currentState: string) => ActionOutputType;
  botThreeActiveToggle: (currentState: string) => ActionOutputType;
  changePlayingDirection: (currentDirection: string) => ActionOutputType;
  deck: Deck;
  cardOnTop: CardType;
  direction: string;
  player: PlayerObjectType;
  gameEnded: boolean;
}
