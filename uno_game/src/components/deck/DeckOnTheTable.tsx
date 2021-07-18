import React from "react";
import { Deck } from "../Deck";
import "./deckOnTheTable.css";

interface DeckOnTheTableProps {
  deck: Deck;
}

export const DeckOnTheTable: React.FC<DeckOnTheTableProps> = (props) => {
  return (
    <div className="DeckOnTheTable">
      <div className="blackPart">
        <div className="redPart">
          <div className="UNO">UNO</div>
        </div>
      </div>
      <div className="numberOfCards">{props.deck.numberOfCards}</div>
    </div>
  );
};
