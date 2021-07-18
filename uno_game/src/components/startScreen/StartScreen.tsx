import React from "react";
import { ActionOutputType } from "../../types/actionOutputType";
import { CardType } from "../../types/cardType";
import {
  BotOneObjectType,
  BotThreeObjectType,
  BotTwoObjectType,
  PlayerObjectType,
} from "../../types/playerObjectType";
import { Deck } from "../Deck";
import "./startScreen.css";

interface StartScreenProps {
  deck: Deck;
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
  startGame: (cards: CardType[]) => ActionOutputType;
  cards: PlayerObjectType;
  botOneCards: BotOneObjectType;
  botTwoCards: BotTwoObjectType;
  botThreeCards: BotThreeObjectType;
}

export const StartScreen: React.FC<StartScreenProps> = (props) => {
  const {
    deck,
    startGame,
    controlsGetSevenCards,
    controlsGetSevenCardsBotOne,
    controlsGetSevenCardsBotThree,
    controlsGetSevenCardsBotTwo,
    cards,
    botOneCards,
    botTwoCards,
    botThreeCards,
  } = props;
  const handleStartClick = () => {
    if (deck.cards?.length > 50) {
      controlsGetSevenCards(deck.cards, cards.playerCards);
      controlsGetSevenCardsBotOne(deck.cards, botOneCards.botOneCards);
      controlsGetSevenCardsBotTwo(deck.cards, botTwoCards.botTwoCards);
      controlsGetSevenCardsBotThree(deck.cards, botThreeCards.botThreeCards);
      startGame(deck.cards);
    }
  };
  const visible = !!(
    cards.playerCards.length === 0 &&
    botOneCards.botOneCards.length === 0 &&
    botTwoCards.botTwoCards.length === 0 &&
    botThreeCards.botThreeCards.length === 0
  );
  return (
    <div
      className="StartScreen"
      style={visible ? { display: "flex" } : { display: "none" }}
    >
      <div className="centralWrapper">
        <div className="logoContainer">
          <div className="LOGO">UNO</div>
        </div>

        <div className="advice">press Start button to play</div>
        <div className="startButtonContainer">
          <button
            className="startButton"
            onClick={() => {
              handleStartClick();
            }}
          >
            Start
          </button>
        </div>
      </div>
      <div className="tip">*unfortunately bots do not play automatically, you need to press buttons to make their turn</div>
    </div>
  );
};
