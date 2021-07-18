import React from "react";
import { ControlsProps } from "../../types/ControlsType";
import { ColorSelect } from "./ColorSelect";
import "./controls.css";

export const Controls: React.FC<ControlsProps> = (props) => {
  const {
    cards,
    botOne,
    botTwo,
    botThree,
    deck,
    controlsGetCard,
    changeColor,
    playerActiveToggle,
    botOneActiveToggle,
    botTwoActiveToggle,
    botThreeActiveToggle,
    direction,
    gameEnded,
    resetDeck,
  } = props;
  let visible = false;
  if (cards.active === "CHANGE_COLOR" || cards.active === "CHANGE_COLOR+4") {
    visible = true;
  } else {
    visible = false;
  }

  const refreshDeck = () => {
    if (deck.numberOfCards < 20) {
      const cardsToRemove: number[] = [];
      cards.playerCards
        .concat(botOne.botOneCards)
        .concat(botTwo.botTwoCards)
        .concat(botThree.botThreeCards)
        .forEach((el) => {
          if (el.numberInDeck) cardsToRemove.push(el.numberInDeck);
        });
      resetDeck(cardsToRemove);
    }
  };

  const unoHandleClick = () => {
    if (cards.playerCards.length === 1) playerActiveToggle("UNO");
  };
  return (
    <div
      className="ControlsWrapper"
      style={!gameEnded ? { display: "flex" } : { display: "none" }}
    >
      <ColorSelect
        visible={visible}
        changeColor={changeColor}
        playerActiveToggle={playerActiveToggle}
        botOneActiveToggle={botOneActiveToggle}
        botTwoActiveToggle={botTwoActiveToggle}
        botThreeActiveToggle={botThreeActiveToggle}
        direction={direction}
        active={cards.active}
      />
      <div className="buttonsWrapper">
        <div className="UNO_Part">
          <button
            className={`UNO_Button ${
              cards.playerCards.length === 1 &&
              (cards.active === "MADE" || cards.active === "COLOR_CHANGED")
                ? "ACTIVE_BUT"
                : ""
            }`}
            onClick={() => {
              unoHandleClick();
            }}
          >
            UNO
          </button>
        </div>
        <div className="GrabWrapper">
          <button
            onClick={() => {
              controlsGetCard(deck.cards, cards.playerCards);
              refreshDeck();
            }}
          >
            Grab
          </button>
        </div>
      </div>
    </div>
  );
};
