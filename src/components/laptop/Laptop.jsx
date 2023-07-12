import React from "react";
import "./laptop.scss";

export const Laptop = () => {
  return (
    <div className="Laptop">
      <div className="left">
        <span className="ol">Challenge Friends</span>
        <span className="ol">View Leaderboard</span>
        <span className="ol">Analyze Quiz</span>
      </div>
      <div className="middle">
        <img src="./images/laptop.png" alt="" />
      </div>
      <div className="right">
        <span className="ol">Join Quiz</span>
        <span className="ol">Create Quiz</span>
        <span className="ol">Choose Topic</span>
      </div>
    </div>
  );
};
