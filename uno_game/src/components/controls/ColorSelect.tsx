import React from "react";
import { ColorSelectProps } from "../../types/ColorSelectType";

export const ColorSelect: React.FC<ColorSelectProps> = (props) => {
  const {
    visible,
    changeColor,
    playerActiveToggle,
    botOneActiveToggle,
    botTwoActiveToggle,
    botThreeActiveToggle,
    direction,
    active,
  } = props;
  const toggleActives = () => {
    if (active === "CHANGE_COLOR") {
      if (direction === "COUNTER_CLOCKWISE") {
        playerActiveToggle("COLOR_CHANGED");
        botOneActiveToggle("ACTIVE");
        botTwoActiveToggle("WAITING");
        botThreeActiveToggle("WAITING");
      } else if (direction === "CLOCKWISE") {
        playerActiveToggle("COLOR_CHANGED");
        botOneActiveToggle("WAITING");
        botTwoActiveToggle("WAITING");
        botThreeActiveToggle("ACTIVE");
      }
    }
    if (active === "CHANGE_COLOR+4") {
      if (direction === "COUNTER_CLOCKWISE") {
        playerActiveToggle("COLOR_CHANGED");
        botOneActiveToggle("GRAB4");
        botTwoActiveToggle("WAITING");
        botThreeActiveToggle("WAITING");
      } else if (direction === "CLOCKWISE") {
        playerActiveToggle("COLOR_CHANGED");
        botOneActiveToggle("WAITING");
        botTwoActiveToggle("WAITING");
        botThreeActiveToggle("GRAB4");
      }
    }
  };
  const changeColorRed = () => {
    changeColor("red");
    toggleActives();
  };

  const changeColorYellow = () => {
    changeColor("yellow");
    toggleActives();
  };

  const changeColorGreen = () => {
    changeColor("green");
    toggleActives();
  };

  const changeColorBlue = () => {
    changeColor("blue");
    toggleActives();
  };

  return (
    <div
      className="ColorSelect"
      style={visible ? { display: "flex" } : { display: "none" }}
    >
      <span>choose color</span>
      <div className="colorsWrapper">
        <button className="redColor" onClick={() => changeColorRed()}></button>
        <button
          className="yellowColor"
          onClick={() => changeColorYellow()}
        ></button>
        <button
          className="greenColor"
          onClick={() => changeColorGreen()}
        ></button>
        <button
          className="blueColor"
          onClick={() => changeColorBlue()}
        ></button>
      </div>
    </div>
  );
};
