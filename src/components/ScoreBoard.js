import React from "react";

import "./ScoreBoard.css";

export const ScoreBoard = (scores, xPlaying) => {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span>X - {xScore}</span>
      <span>O - {oScore}</span>
    </div>
  );
};
