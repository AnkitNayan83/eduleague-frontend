import React from "react";
import "./leaderboardCard.scss";

export const LeaderboardCard = ({ rank, name, score, time }) => {
  return (
    <div className="LC">
      <div className="left">
        <span className="rk">{rank}</span>
        <span>{name}</span>
      </div>
      <div className="right">
        <span>{score}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
