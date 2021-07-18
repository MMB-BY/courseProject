import { BotTwoProps } from "../../types/BotTwoType";
import { CardType } from "../../types/cardType";
import "./botTwo.css";

export const BotTwo: React.FC<BotTwoProps> = (props) => {
  const {
    playerCards,
    botOne,
    botTwo,
    botThree,
    throw: throwCard,
    delete: deleteCard,
    botTwo: player,
    botOneActiveToggle,
    botTwoActiveToggle,
    botThreeActiveToggle,
    playerActiveToggle,
    getCardBotTwo,
    deckOnTable,
    cardOnTop,
    changePlayingDirection,
    direction,
    changeColor,
    gameEnded,
    resetDeck,
    getCard,
  } = props;
  const cards = player.botTwoCards;

  const changeColorBot = () => {
    const newColor = cards.find((card: CardType) => {
      return card.suit !== "black";
    });
    if (newColor !== undefined) changeColor(newColor.suit);
  };

  const fits = (element: CardType, index: number) => {
    if (
      cardOnTop.suit === "black" ||
      cardOnTop.suit === element.suit ||
      cardOnTop.value === element.value
    ) {
      deleteCard(cards, index);
      return true;
    }
  };

  const playerUnoCheck = () => {
    if (
      playerCards.playerCards.length === 1 &&
      (playerCards.active === "MADE" || playerCards.active === "COLOR_CHANGED")
    ) {
      getCard(deckOnTable.cards, playerCards.playerCards);
      getCard(deckOnTable.cards, playerCards.playerCards);
    }
  };

  const refreshDeck = () => {
    const cardsToRemove: number[] = [];
    playerCards.playerCards
      .concat(botOne.botOneCards)
      .concat(botTwo.botTwoCards)
      .concat(botThree.botThreeCards)
      .forEach((el) => {
        if (el.numberInDeck) cardsToRemove.push(el.numberInDeck);
      });
    resetDeck(cardsToRemove);
  };

  const handleClick = (cards: CardType[]) => {
    if (direction === "COUNTER_CLOCKWISE") {
      const outOfTO = (cards: CardType[], currentState: string) => {
        if (currentState === "GRAB2") {
          playerUnoCheck();
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          botTwoActiveToggle("WAITING");
          botThreeActiveToggle("ACTIVE");
        }
        if (currentState === "GRAB4") {
          playerUnoCheck();
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          botTwoActiveToggle("WAITING");
          botThreeActiveToggle("ACTIVE");
        }
        if (currentState === "ACTIVE") {
          playerUnoCheck();
          const newCard = cards.find(fits);
          if (newCard !== undefined) {
            if (newCard.value === "stop") {
              botTwoActiveToggle("MADE");
              botOneActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              playerActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+2") {
              botTwoActiveToggle("MADE");
              botThreeActiveToggle("GRAB2");
              botOneActiveToggle("WAITING");
              playerActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "color") {
              changeColorBot();
              botTwoActiveToggle("CHANGE_COLOR");
              playerActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              botThreeActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+4") {
              changeColorBot();
              botTwoActiveToggle("+4");
              playerActiveToggle("WAITING");
              botOneActiveToggle("WAITING");
              botThreeActiveToggle("GRAB4");
              throwCard(newCard);
            } else if (newCard.value === "flow") {
              changePlayingDirection(direction);
              botTwoActiveToggle("MADE");
              botOneActiveToggle("ACTIVE");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else {
              botTwoActiveToggle("MADE");
              botThreeActiveToggle("ACTIVE");
              botOneActiveToggle("WAITING");
              playerActiveToggle("WAITING");
              throwCard(newCard);
            }
          } else {
            if (deckOnTable.numberOfCards < 20) {
              refreshDeck();
            }
            getCardBotTwo(deckOnTable.cards, cards);
            outOfTO(cards, player.active);
          }
        }
      };
      outOfTO(cards, player.active);
    } else if (direction === "CLOCKWISE") {
      const outOfTO = (cards: CardType[], currentState: string) => {
        if (currentState === "GRAB2") {
          playerUnoCheck();
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          botTwoActiveToggle("WAITING");
          botOneActiveToggle("ACTIVE");
        }
        if (currentState === "GRAB4") {
          playerUnoCheck();
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          getCardBotTwo(deckOnTable.cards, cards);
          botTwoActiveToggle("WAITING");
          botOneActiveToggle("ACTIVE");
        }
        if (currentState === "ACTIVE") {
          playerUnoCheck();
          const newCard = cards.find(fits);
          if (newCard !== undefined) {
            if (newCard.value === "stop") {
              botTwoActiveToggle("MADE");
              botOneActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              playerActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+2") {
              botTwoActiveToggle("MADE");
              botOneActiveToggle("GRAB2");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "color") {
              changeColorBot();
              botTwoActiveToggle("CHANGE_COLOR");
              playerActiveToggle("WAITING");
              botOneActiveToggle("ACTIVE");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "+4") {
              changeColorBot();
              botTwoActiveToggle("+4");
              playerActiveToggle("WAITING");
              botOneActiveToggle("GRAB4");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "flow") {
              changePlayingDirection(direction);
              botTwoActiveToggle("MADE");
              botThreeActiveToggle("ACTIVE");
              botOneActiveToggle("WAITING");
              playerActiveToggle("WAITING");
              throwCard(newCard);
            } else {
              botTwoActiveToggle("MADE");
              botOneActiveToggle("ACTIVE");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            }
          } else {
            if (deckOnTable.numberOfCards < 20) {
              refreshDeck();
            }
            getCardBotTwo(deckOnTable.cards, cards);
            outOfTO(cards, player.active);
          }
        }
      };
      outOfTO(cards, player.active);
    }
  };

  let underline = "";
  if (player.active !== "MADE" && player.active !== "WAITING") {
    underline = "ACTIVE";
  }

  return (
    <div
      className={`BotTwo ${underline}BotTwo`}
      style={!gameEnded ? { display: "flex" } : { display: "none" }}
    >
      <div className="leftPartOfBot">
        <div className="numberOfCards">{cards.length}</div>
        <div
          className="UNOBotAlarm"
          style={cards.length === 1 ? { display: "flex" } : { display: "none" }}
        >
          UNO
        </div>
      </div>
      <div className="cardOnTheTable">
        <div className="blackPart">
          <div className="redPart">
            <div className="UNO">UNO</div>
          </div>
        </div>
      </div>
      <button className="botButton" onClick={() => handleClick(cards)}>
        bot2
      </button>
    </div>
  );
};
