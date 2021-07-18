import { BotOneProps } from "../../types/BotOneType";
import { CardType } from "../../types/cardType";
import "./botOne.css";

export const BotOne: React.FC<BotOneProps> = (props) => {
  const {
    playerCards,
    botOne,
    botTwo,
    botThree,
    throw: throwCard,
    delete: deleteCard,
    botOne: player,
    botOneActiveToggle,
    botThreeActiveToggle,
    botTwoActiveToggle,
    playerActiveToggle,
    getCardBotOne,
    deckOnTable,
    cardOnTop,
    changePlayingDirection,
    direction,
    changeColor,
    gameEnded,
    resetDeck,
    getCard,
  } = props;
  const cards = player.botOneCards;

  const changeColorBot = () => {
    const newColor = cards.find((card: CardType) => {
      return card.suit !== "black";
    });
    if (newColor !== undefined) changeColor(newColor.suit);
  };

  const fits = (element: CardType, index: number) => {
    if (
      element.suit === "black" ||
      cardOnTop.suit === element.suit ||
      cardOnTop.value === element.value
    ) {
      deleteCard(cards, index);

      return true;
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

  const playerUnoCheck = () => {
    if (
      playerCards.playerCards.length === 1 &&
      (playerCards.active === "MADE" || playerCards.active === "COLOR_CHANGED")
    ) {
      getCard(deckOnTable.cards, playerCards.playerCards);
      getCard(deckOnTable.cards, playerCards.playerCards);
    }
  };

  const handleClick = (cards: CardType[]) => {
    if (direction === "COUNTER_CLOCKWISE") {
      const outOfTO = (cards: CardType[], currentState: string) => {
        if (currentState === "GRAB2") {
          playerUnoCheck();
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          botOneActiveToggle("WAITING");
          botTwoActiveToggle("ACTIVE");
        }
        if (currentState === "GRAB4") {
          playerUnoCheck();
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          botOneActiveToggle("WAITING");
          botTwoActiveToggle("ACTIVE");
        }
        if (currentState === "ACTIVE") {
          playerUnoCheck();
          const newCard = cards.find(fits);
          if (newCard !== undefined) {
            if (newCard.value === "stop") {
              botOneActiveToggle("MADE");
              botTwoActiveToggle("WAITING");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+2") {
              botOneActiveToggle("MADE");
              botTwoActiveToggle("GRAB2");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "color") {
              changeColorBot();
              botOneActiveToggle("CHANGE_COLOR");
              playerActiveToggle("WAITING");
              botTwoActiveToggle("ACTIVE");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "+4") {
              changeColorBot();
              botOneActiveToggle("+4");
              playerActiveToggle("WAITING");
              botTwoActiveToggle("GRAB4");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "flow") {
              changePlayingDirection(direction);
              botOneActiveToggle("MADE");
              botTwoActiveToggle("WAITING");
              playerActiveToggle("ACTIVE");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else {
              botOneActiveToggle("MADE");
              botTwoActiveToggle("ACTIVE");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            }
          } else {
            if (deckOnTable.numberOfCards < 20) {
              refreshDeck();
            }
            getCardBotOne(deckOnTable.cards, cards);
            outOfTO(cards, player.active);
          }
        }
      };
      outOfTO(cards, player.active);
    } else if (direction === "CLOCKWISE") {
      const outOfTO = (cards: CardType[], currentState: string) => {
        if (currentState === "GRAB2") {
          playerUnoCheck();
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          botOneActiveToggle("WAITING");
          playerActiveToggle("ACTIVE");
        }
        if (currentState === "GRAB4") {
          playerUnoCheck();
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          getCardBotOne(deckOnTable.cards, cards);
          botOneActiveToggle("WAITING");
          playerActiveToggle("ACTIVE");
        }
        if (currentState === "ACTIVE") {
          playerUnoCheck();
          const newCard = cards.find(fits);
          if (newCard !== undefined) {
            if (newCard.value === "stop") {
              botOneActiveToggle("MADE");
              botTwoActiveToggle("WAITING");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("ACTIVE");
              throwCard(newCard);
            } else if (newCard.value === "+2") {
              botOneActiveToggle("MADE");
              playerActiveToggle("GRAB2");
              botTwoActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "color") {
              changeColorBot();
              botOneActiveToggle("CHANGE_COLOR");
              playerActiveToggle("ACTIVE");
              botTwoActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "+4") {
              changeColorBot();
              botOneActiveToggle("+4");
              playerActiveToggle("GRAB4");
              botTwoActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else if (newCard.value === "flow") {
              changePlayingDirection(direction);
              botOneActiveToggle("MADE");
              botTwoActiveToggle("ACTIVE");
              playerActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            } else {
              botOneActiveToggle("MADE");
              playerActiveToggle("ACTIVE");
              botTwoActiveToggle("WAITING");
              botThreeActiveToggle("WAITING");
              throwCard(newCard);
            }
          } else {
            if (deckOnTable.numberOfCards < 20) {
              refreshDeck();
            }
            getCardBotOne(deckOnTable.cards, cards);
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
      className={`BotOne ${underline}BotOne`}
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
        bot1
      </button>
    </div>
  );
};
