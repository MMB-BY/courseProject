import { CardType } from "../../types/cardType";
import "./cardOnTheTable.css";

interface CardOnTheTableProps {
  card: CardType;
  id?: number;
}

export const CardOnTheTable: React.FC<CardOnTheTableProps> = (props) => {
  const { card, id } = props;
  const { suit, value } = card;
  return (
    <div
      id={`${id}`}
      className="cardFaceUp"
      style={{ backgroundColor: `${suit}` }}
    >
      <div className={`topLeftDigit`}>{value}</div>
      <div className="whitePart">
        <div
          className={`valueOfCard ${value.length > 3 ? "longCard" : ""}`}
          style={{ color: `${suit}` }}
        >
          {value}
        </div>
      </div>
      <div className={`bottomRightDigit`}>{value}</div>
    </div>
  );
};
