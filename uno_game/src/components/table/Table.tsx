import React from "react";
import { TableProps } from "../../types/TableType";
import { BotOne } from "../bot1/BotOne";
import { BotTwo } from "../bot2/BotTwo";
import { BotThree } from "../bot3/BotThree";
import { CardOnTheTable } from "../card/CardOnTheTable";
import { Controls } from "../controls/Controls";
import { DeckOnTheTable } from "../deck/DeckOnTheTable";
import { FinishGame } from "../finishGame/FinishGame";
import { Player } from "../player/Player";
import { StartScreen } from "../startScreen/StartScreen";
import "./table.css";

export const Table: React.FC<TableProps> = (props) => {
  const {
    player,
    playerActiveToggle,
    throwCard,
    deleteCard,
    botOne,
    getCardBotOne,
    botOneThrowCard,
    botOneDeleteCard,
    botOneActiveToggle,
    botTwo,
    getCardBotTwo,
    botTwoThrowCard,
    botTwoDeleteCard,
    botTwoActiveToggle,
    botThree,
    getCardBotThree,
    botThreeThrowCard,
    botThreeDeleteCard,
    botThreeActiveToggle,
    controlsGetCard,
    controlsGetSevenCards,
    controlsGetSevenCardsBotOne,
    controlsGetSevenCardsBotTwo,
    controlsGetSevenCardsBotThree,
    startGame,
    table,
    changePlayingDirection,
    changeColor,
    deck,
    resetDeck,
  } = props;
  const winner =
    player.playerCards.length === 0
      ? "Player"
      : botOne.botOneCards.length === 0
      ? "BotOne"
      : botTwo.botTwoCards.length === 0
      ? "BotTwo"
      : botThree.botThreeCards.length === 0
      ? "BotThree"
      : "none";

  let gameEnded: boolean = false;
  let visible: boolean = !!!(
    player.playerCards.length === 0 &&
    botOne.botOneCards.length === 0 &&
    botTwo.botTwoCards.length === 0 &&
    botThree.botThreeCards.length === 0
  );
  if (winner !== "none" && visible === true) {
    gameEnded = true;
    visible = false;
  }
  const cardOnTop =
    player.active === "MADE"
      ? player.topCard
      : botOne.active === "MADE"
      ? botOne.topCard
      : botTwo.active === "MADE"
      ? botTwo.topCard
      : botThree.active === "MADE"
      ? botThree.topCard
      : player.active === "UNO"
      ? player.topCard
      : table.topCard;

  return (
    <div className="wrapper">
      <StartScreen
        startGame={startGame}
        controlsGetCard={controlsGetCard}
        controlsGetSevenCards={controlsGetSevenCards}
        controlsGetSevenCardsBotOne={controlsGetSevenCardsBotOne}
        controlsGetSevenCardsBotTwo={controlsGetSevenCardsBotTwo}
        controlsGetSevenCardsBotThree={controlsGetSevenCardsBotThree}
        deck={deck.deck}
        cards={player}
        botOneCards={botOne}
        botTwoCards={botTwo}
        botThreeCards={botThree}
      />
      <FinishGame visible={gameEnded} winner={winner} />
      <div className="botOneLocation">
        <BotOne
          playerCards={player}
          botOne={botOne}
          botTwo={botTwo}
          botThree={botThree}
          throw={botOneThrowCard}
          delete={botOneDeleteCard}
          botOneActiveToggle={botOneActiveToggle}
          botTwoActiveToggle={botTwoActiveToggle}
          botThreeActiveToggle={botThreeActiveToggle}
          playerActiveToggle={playerActiveToggle}
          getCardBotOne={getCardBotOne}
          getCard={controlsGetCard}
          deckOnTable={deck.deck}
          cardOnTop={cardOnTop}
          direction={table.playingDirection}
          changePlayingDirection={changePlayingDirection}
          changeColor={changeColor}
          gameEnded={!visible}
          resetDeck={resetDeck}
        />
      </div>
      <div className="botTwoLocation">
        <BotTwo
          playerCards={player}
          botOne={botOne}
          botTwo={botTwo}
          botThree={botThree}
          throw={botTwoThrowCard}
          delete={botTwoDeleteCard}
          botOneActiveToggle={botOneActiveToggle}
          botTwoActiveToggle={botTwoActiveToggle}
          botThreeActiveToggle={botThreeActiveToggle}
          playerActiveToggle={playerActiveToggle}
          getCardBotTwo={getCardBotTwo}
          getCard={controlsGetCard}
          deckOnTable={deck.deck}
          cardOnTop={cardOnTop}
          changePlayingDirection={changePlayingDirection}
          direction={table.playingDirection}
          changeColor={changeColor}
          gameEnded={!visible}
          resetDeck={resetDeck}
        />
      </div>
      <div className="botThreeLocation">
        <BotThree
          playerCards={player}
          botOne={botOne}
          botTwo={botTwo}
          botThree={botThree}
          throw={botThreeThrowCard}
          delete={botThreeDeleteCard}
          botOneActiveToggle={botOneActiveToggle}
          botTwoActiveToggle={botTwoActiveToggle}
          botThreeActiveToggle={botThreeActiveToggle}
          playerActiveToggle={playerActiveToggle}
          getCardBotThree={getCardBotThree}
          getCard={controlsGetCard}
          deckOnTable={deck.deck}
          cardOnTop={cardOnTop}
          changePlayingDirection={changePlayingDirection}
          direction={table.playingDirection}
          changeColor={changeColor}
          gameEnded={!visible}
          resetDeck={resetDeck}
        />
      </div>
      <div
        className="TableLocation"
        style={visible ? { display: "flex" } : { display: "none" }}
      >
        <div className="statusBlock">
          <p>Player status: {player.active}</p>
          <p>BotOne status: {botOne.active}</p>
          <p>BotTwo status: {botTwo.active}</p>
          <p>BotThree status: {botThree.active}</p>
          <p>{table.playingDirection}</p>
        </div>

        <div className="deckAndCardLocation">
          <div className="cardLocation">
            <CardOnTheTable card={cardOnTop} />
          </div>
          <div className="deckLocation">
            <DeckOnTheTable deck={deck.deck} />
          </div>
        </div>
      </div>

      <div className="bottomPart">
        <Player
          player={player}
          throwCard={throwCard}
          deleteCard={deleteCard}
          playerActiveToggle={playerActiveToggle}
          botOneActiveToggle={botOneActiveToggle}
          botTwoActiveToggle={botTwoActiveToggle}
          botThreeActiveToggle={botThreeActiveToggle}
          cardOnTop={cardOnTop}
          changePlayingDirection={changePlayingDirection}
          direction={table.playingDirection}
          getCard={controlsGetCard}
          deck={deck.deck}
          gameEnded={!visible}
        />
        <Controls
          cards={player}
          botOne={botOne}
          botTwo={botTwo}
          botThree={botThree}
          deck={deck.deck}
          startGame={startGame}
          controlsGetCard={controlsGetCard}
          changeColor={changeColor}
          playerActiveToggle={playerActiveToggle}
          botOneActiveToggle={botOneActiveToggle}
          botTwoActiveToggle={botTwoActiveToggle}
          botThreeActiveToggle={botThreeActiveToggle}
          direction={table.playingDirection}
          gameEnded={!visible}
          resetDeck={resetDeck}
        />
      </div>
    </div>
  );
};
