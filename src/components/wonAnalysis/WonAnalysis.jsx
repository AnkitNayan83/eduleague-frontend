import React from "react";

export const WonAnalysis = ({ name, opponenet, price, date }) => {
  return (
    <div className="w-box">
      <div className="first center">
        <h3>{name} Test</h3>
        <p>Date : {date}</p>
      </div>
      <div className="second center">
        <div className="you">
          <img src="./images/happy.png" alt="" />
          <h5>You</h5>
        </div>
        <div className="vs">Vs</div>
        <div className="opp">
          <img src="./images/sad.png" alt="" />
          <h5>{opponenet}</h5>
        </div>
      </div>
      <div className="third center green">Won ₹{price}</div>
    </div>
  );
};
