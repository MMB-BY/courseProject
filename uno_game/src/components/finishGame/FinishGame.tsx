import React from "react";
import "./finishGame.css";

interface FinishGameProps {
  visible: boolean;
  winner: string;
}

export const FinishGame: React.FC<FinishGameProps> = (props) => {
  const { winner, visible } = props;
  const result = winner === "Player" ? "WIN" : "defeat";
  return (
    <div
      className="FinishGame"
      style={visible ? { display: "flex" } : { display: "none" }}
    >
      <div className="result">{result}</div>
      <div className="resultLine"></div>
      <div className="winner">{winner}</div>
      <button
        className="restart"
        onClick={() => {
          window.location.reload();
        }}
      >
        &#8635;
      </button>
    </div>
  );
};
