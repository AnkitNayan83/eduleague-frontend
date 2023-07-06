import React from "react";

export const Transaction = ({ log }) => {
  console.log(log);
  const data = log.split("@");
  const str = data[0];
  const timestamp = data[1]; 
  const time = new Date(Number(timestamp));
  const formattedDate = time.toLocaleDateString();
  return (
    <div className="transaction-conatiner">
      <div className="left">
        {/* <h4>English</h4> */}
        <p className="date">{formattedDate}</p>
      </div>
      <div className="right">
        <h2>{str}</h2>
      </div>
    </div>
  );
};
