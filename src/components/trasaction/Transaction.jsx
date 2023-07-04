import React from "react";

export const Transaction = ({ log }) => {
  return (
    <div className="transaction-conatiner">
      <div className="left">
        <h4>English</h4>
        <p className="date">22/02/23</p>
      </div>
      <div className="right">
        <h2>{log}</h2>
      </div>
    </div>
  );
};
