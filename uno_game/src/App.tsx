import { connect } from "react-redux";
import { flipCardAction } from "./actions/player/flipCardAction";

import { getCardAction } from "./actions/player/getCardAction";
import { throwCardAction } from "./actions/player/throwCardAction";
import { Table } from "./components/table/Table";
import { deleteCardAction } from "./actions/player/deleteCardAction";
import { getSevenCardAction } from "./actions/player/getSevenCardsAction";
import {
  getSevenCardActionBotOne,
  getSevenCardActionBotThree,
  getSevenCardActionBotTwo,
} from "./actions/botActions/botGetSevenCards";
import {
  getCardActionBotOne,
  getCardActionBotThree,
  getCardActionBotTwo,
} from "./actions/botActions/botGetCardAction";
import {
  throwCardActionBotOne,
  throwCardActionBotThree,
  throwCardActionBotTwo,
} from "./actions/botActions/botThrowCardAction";
import {
  deleteCardActionBotOne,
  deleteCardActionBotThree,
  deleteCardActionBotTwo,
} from "./actions/botActions/botDeleteCardAction";
import { playerActiveToggle } from "./actions/player/playerActiveToggle";
import {
  botOneActiveToggle,
  botThreeActiveToggle,
  botTwoActiveToggle,
} from "./actions/botActions/botActiveToggler";
import { startGameAction } from "./actions/startGame";
import { changePlayingDirection } from "./actions/changePlayingDirection";
import { changeColorAction } from "./actions/player/changeColorAction";
import { CardType } from "./types/cardType";
import React from "react";
import { ActionOutputType } from "./types/actionOutputType";
import { AppProps, AppStore } from "./types/AppType";
import { resetDeckAction } from "./actions/resetDeck";

const App: React.FC<AppProps> = (props) => {
  const {
    startGame,
    getCard,
    player,
    throwCard,
    deleteCard,
    getSevenCards,
    playerActiveToggle,

    getSevenCardsBotOne,
    getCardBotOne,
    throwCardBotOne,
    deleteCardBotOne,
    botOneActiveToggle,
    getSevenCardsBotTwo,
    getCardBotTwo,
    throwCardBotTwo,
    deleteCardBotTwo,
    botTwoActiveToggle,
    getSevenCardsBotThree,
    getCardBotThree,
    throwCardBotThree,
    deleteCardBotThree,
    botThreeActiveToggle,
    changePlayingDirection,
    table,
    changeColor,
    deck,
    botOne,
    botTwo,
    botThree,
    resetDeck,
  } = props;
  return (
    <div className="App">
      <Table
        deck={deck}
        startGame={startGame}
        player={player}
        throwCard={throwCard}
        deleteCard={deleteCard}
        playerActiveToggle={playerActiveToggle}
        botOne={botOne}
        botOneThrowCard={throwCardBotOne}
        botOneDeleteCard={deleteCardBotOne}
        botOneActiveToggle={botOneActiveToggle}
        getCardBotOne={getCardBotOne}
        controlsGetCard={getCard}
        controlsGetSevenCards={getSevenCards}
        controlsGetSevenCardsBotOne={getSevenCardsBotOne}
        controlsGetSevenCardsBotTwo={getSevenCardsBotTwo}
        controlsGetSevenCardsBotThree={getSevenCardsBotThree}
        botTwo={botTwo}
        botTwoThrowCard={throwCardBotTwo}
        botTwoDeleteCard={deleteCardBotTwo}
        botTwoActiveToggle={botTwoActiveToggle}
        getCardBotTwo={getCardBotTwo}
        botThree={botThree}
        botThreeThrowCard={throwCardBotThree}
        botThreeDeleteCard={deleteCardBotThree}
        botThreeActiveToggle={botThreeActiveToggle}
        getCardBotThree={getCardBotThree}
        table={table}
        changePlayingDirection={changePlayingDirection}
        changeColor={changeColor}
        resetDeck={resetDeck}
      />
    </div>
  );
};

const mapStateToProps = (store: AppStore) => {
  return {
    deck: store.deck,
    table: store.table,
    player: store.player,
    botOne: store.botOne,
    botTwo: store.botTwo,
    botThree: store.botThree,
  };
};

const mapDispatchToProps = (
  dispatch: (action: ActionOutputType) => ActionOutputType
) => {
  return {
    // setTheDeck: () => dispatch(setDeckAction()),
    flipCard: (cards: CardType[]) => dispatch(flipCardAction(cards)),
    startGame: (cards: CardType[]) => dispatch(startGameAction(cards)),
    //--------------------------------------
    getCard: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getCardAction(cards, playerCards)),
    throwCard: (actualCard: CardType) => dispatch(throwCardAction(actualCard)),
    deleteCard: (cards: CardType[], id: number): ActionOutputType =>
      dispatch(deleteCardAction(cards, id)),
    getSevenCards: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getSevenCardAction(cards, playerCards)),
    playerActiveToggle: (active: string) =>
      dispatch(playerActiveToggle(active)),
    changePlayingDirection: (direction: string) =>
      dispatch(changePlayingDirection(direction)),
    // -------------------------------------
    getCardBotOne: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getCardActionBotOne(cards, playerCards)),
    getSevenCardsBotOne: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getSevenCardActionBotOne(cards, playerCards)),
    throwCardBotOne: (actualCard: CardType) =>
      dispatch(throwCardActionBotOne(actualCard)),
    deleteCardBotOne: (cards: CardType[], id: number): ActionOutputType =>
      dispatch(deleteCardActionBotOne(cards, id)),
    botOneActiveToggle: (active: string) =>
      dispatch(botOneActiveToggle(active)),
    // -------------------------------------
    getCardBotTwo: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getCardActionBotTwo(cards, playerCards)),
    getSevenCardsBotTwo: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getSevenCardActionBotTwo(cards, playerCards)),
    throwCardBotTwo: (actualCard: CardType) =>
      dispatch(throwCardActionBotTwo(actualCard)),
    deleteCardBotTwo: (cards: CardType[], id: number): ActionOutputType =>
      dispatch(deleteCardActionBotTwo(cards, id)),
    botTwoActiveToggle: (active: string) =>
      dispatch(botTwoActiveToggle(active)),
    // -------------------------------------
    getCardBotThree: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getCardActionBotThree(cards, playerCards)),
    getSevenCardsBotThree: (cards: CardType[], playerCards: CardType[]) =>
      dispatch(getSevenCardActionBotThree(cards, playerCards)),
    throwCardBotThree: (actualCard: CardType) =>
      dispatch(throwCardActionBotThree(actualCard)),
    deleteCardBotThree: (cards: CardType[], id: number): ActionOutputType =>
      dispatch(deleteCardActionBotThree(cards, id)),
    botThreeActiveToggle: (active: string) =>
      dispatch(botThreeActiveToggle(active)),
    changeColor: (color: string) => dispatch(changeColorAction(color)),
    resetDeck: (cardsToRemove: number[]) =>
      dispatch(resetDeckAction(cardsToRemove)),
  };
};

export const MainComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App as React.FC);
