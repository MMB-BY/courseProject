import { BotThreeProps } from "../../types/BotThreeType";
import { CardType } from "../../types/cardType";
import "./botThree.css";

export const BotThree: React.FC<BotThreeProps> = (props) => {
  const {
    playerCards,
    botOne,
    botTwo,
    botThree,
    throw: throwCard,
    delete: deleteCard,
    botThree: player,
    botOneActiveToggle,
    botTwoActiveToggle,
    botThreeActiveToggle,
    playerActiveToggle,
    getCardBotThree,
    deckOnTable,
    cardOnTop,
    changePlayingDirection,
    direction,
    changeColor,
    gameEnded,
    resetDeck,
    getCard,
  } = props;
  const cards = player.botThreeCards;

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
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          botThreeActiveToggle("WAITING");
          playerActiveToggle("ACTIVE");
        }
        if (currentState === "GRAB4") {
          playerUnoCheck();
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          botThreeActiveToggle("WAITING");
          playerActiveToggle("ACTIVE");
        }
        if (currentState === "ACTIVE") {
          playerUnoCheck();
          const newCard = cards.find(fits);
          if (newCard !== undefined) {
            if (newCard.value === "stop") {
              botThreeActiveToggle("MADE");
              playerActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              botOneActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+2") {
              botThreeActiveToggle("MADE");
              playerActiveToggle("GRAB2");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "color") {
              changeColorBot();
              botThreeActiveToggle("CHANGE_COLOR");
              playerActiveToggle("ACTIVE");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "+4") {
              changeColorBot();
              botThreeActiveToggle("+4");
              playerActiveToggle("GRAB4");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "flow") {
              changePlayingDirection(direction);
              botThreeActiveToggle("MADE");
              botTwoActiveToggle("ACTIVE");
              playerActiveToggle("WAITING");
              botOneActiveToggle("WAITING");
              throwCard(newCard);
            } else {
              botThreeActiveToggle("MADE");
              playerActiveToggle("ACTIVE");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              throwCard(newCard);
            }
          } else {
            if (deckOnTable.numberOfCards < 20) {
              refreshDeck();
            }
            getCardBotThree(deckOnTable.cards, cards);
            outOfTO(cards, player.active);
          }
        }
      };
      outOfTO(cards, player.active);
    } else if (direction === "CLOCKWISE") {
      const outOfTO = (cards: CardType[], currentState: string) => {
        if (currentState === "GRAB2") {
          playerUnoCheck();
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          botThreeActiveToggle("WAITING");
          botTwoActiveToggle("ACTIVE");
        }
        if (currentState === "GRAB4") {
          playerUnoCheck();
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          getCardBotThree(deckOnTable.cards, cards);
          botThreeActiveToggle("WAITING");
          botTwoActiveToggle("ACTIVE");
        }
        if (currentState === "ACTIVE") {
          playerUnoCheck();
          const newCard = cards.find(fits);
          if (newCard !== undefined) {
            if (newCard.value === "stop") {
              botThreeActiveToggle("MADE");
              botOneActiveToggle("ACTIVE");
              botThreeActiveToggle("WAITING");
              playerActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "+2") {
              botThreeActiveToggle("MADE");
              botTwoActiveToggle("GRAB2");
              playerActiveToggle("WAITING");
              botOneActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "color") {
              changeColorBot();
              botThreeActiveToggle("CHANGE_COLOR");
              playerActiveToggle("WAITING");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+4") {
              changeColorBot();
              botThreeActiveToggle("+4");
              playerActiveToggle("WAITING");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("GRAB4");
              throwCard(newCard);
            } else if (newCard.value === "flow") {
              changePlayingDirection(direction);
              botThreeActiveToggle("MADE");
              playerActiveToggle("ACTIVE");
              botOneActiveToggle("WAITING");
              botTwoActiveToggle("WAITING");
              throwCard(newCard);
            } else {
              botThreeActiveToggle("MADE");
              botTwoActiveToggle("ACTIVE");
              playerActiveToggle("WAITING");
              botOneActiveToggle("WAITING");
              throwCard(newCard);
            }
          } else {
            if (deckOnTable.numberOfCards < 20) {
              refreshDeck();
            }
            getCardBotThree(deckOnTable.cards, cards);
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
      className={`BotThree ${underline}BotThree`}
      style={!gameEnded ? { display: "flex" } : { display: "none" }}
    >
      <div className="leftPartOfBot">
        <div className="numberOfCards">{cards.length}</div>
        <div
          className="UNOBotAlarm"
          style={
            cards.length === 1
              ? { display: "flex" }
              : { display: "none" }
          }
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
        bot3
      </button>
    </div>
  );
};
