import React from "react";

export const Transaction = ({ log }) => {
  const data = log.split("@");
  const str = data[0];
  const time = data[1];
  const formattedDate = new Date(time).toLocaleDateString();
  return (
    <div className="transaction-conatiner">
      <div className="left">
        <h4>English</h4>
        <p className="date">{formattedDate}</p>
      </div>
      <div className="right">
        <h2>{str}</h2>
      </div>
    </div>
  );
};
