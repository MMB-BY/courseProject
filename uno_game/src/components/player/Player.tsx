import React from "react";
import { CardType } from "../../types/cardType";
import { PlayerProps } from "../../types/PlayerType";
import { CardOnTheTable } from "../card/CardOnTheTable";
import "./player.css";

export const Player: React.FC<PlayerProps> = (props) => {
  const {
    throwCard,
    deleteCard,
    playerActiveToggle,
    botOneActiveToggle,
    botTwoActiveToggle,
    botThreeActiveToggle,
    cardOnTop,
    changePlayingDirection,
    direction,
    getCard,
    deck,
    player,
    gameEnded,
  } = props;
  const cards = player.playerCards;
  const handleClick = (index: number) => {
    if (player.active === "GRAB2" || player.active === "GRAB4") {
      if (player.active === "GRAB2") {
        getCard(deck.cards, cards);
        getCard(deck.cards, cards);
      }
      if (player.active === "GRAB4") {
        getCard(deck.cards, cards);
        getCard(deck.cards, cards);
        getCard(deck.cards, cards);
        getCard(deck.cards, cards);
      }
      if (direction === "COUNTER_CLOCKWISE") {
        playerActiveToggle("WAITING");
        botOneActiveToggle("ACTIVE");
        botTwoActiveToggle("WAITING");
      }
      if (direction === "CLOCKWISE") {
        botThreeActiveToggle("ACTIVE");
        playerActiveToggle("WAITING");
        botTwoActiveToggle("WAITING");
      }
    }
    if (player.active === "ACTIVE") {
      const newCard = cards[index];
      if (direction === "COUNTER_CLOCKWISE") {
        if (
          cardOnTop.suit === newCard.suit ||
          cardOnTop.value === newCard.value ||
          newCard.suit === "black"
        ) {
          if (newCard.value === "stop") {
            playerActiveToggle("MADE");
            botOneActiveToggle("WAITING");
            botTwoActiveToggle("ACTIVE");
            botThreeActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "+2") {
            playerActiveToggle("MADE");
            botOneActiveToggle("GRAB2");
            botThreeActiveToggle("WAITING");
            botTwoActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "color") {
            playerActiveToggle("CHANGE_COLOR");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "+4") {
            playerActiveToggle("CHANGE_COLOR+4");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "flow") {
            changePlayingDirection(direction);
            playerActiveToggle("MADE");
            botThreeActiveToggle("ACTIVE");
            botTwoActiveToggle("WAITING");
            botOneActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          } else {
            playerActiveToggle("MADE");
            botOneActiveToggle("ACTIVE");
            botThreeActiveToggle("WAITING");
            botTwoActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          }
        }
      } else if (direction === "CLOCKWISE") {
        if (
          cardOnTop.suit === newCard.suit ||
          cardOnTop.value === newCard.value ||
          newCard.suit === "black"
        ) {
          if (newCard.value === "stop") {
            playerActiveToggle("MADE");
            botOneActiveToggle("WAITING");
            botTwoActiveToggle("ACTIVE");
            botThreeActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "+2") {
            playerActiveToggle("MADE");
            botThreeActiveToggle("GRAB2");
            botOneActiveToggle("WAITING");
            botTwoActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "color") {
            playerActiveToggle("CHANGE_COLOR");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "+4") {
            playerActiveToggle("CHANGE_COLOR+4");
            throwCard(newCard);
            deleteCard(cards, index);
          } else if (newCard.value === "flow") {
            changePlayingDirection(direction);
            playerActiveToggle("MADE");
            botOneActiveToggle("ACTIVE");
            botTwoActiveToggle("WAITING");
            botThreeActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          } else {
            playerActiveToggle("MADE");
            botThreeActiveToggle("ACTIVE");
            botOneActiveToggle("WAITING");
            botTwoActiveToggle("WAITING");
            throwCard(newCard);
            deleteCard(cards, index);
          }
        }
      }
    }
  };

  let underline = "";
  if (player.active !== "MADE" && player.active !== "WAITING") {
    underline = "ACTIVE";
  }

  return (
    <div
      className={`Player ${underline}Player`}
      style={!gameEnded ? { display: "flex" } : { display: "none" }}
    >
      {cards.map((card: CardType, key: number) => {
        return (
          <div
            className="cardWrapper"
            key={key}
            onClick={() => handleClick(key)}
          >
            <CardOnTheTable card={card} id={key} />
          </div>
        );
      })}
    </div>
  );
};
