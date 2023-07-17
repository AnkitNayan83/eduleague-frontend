import React from "react";
import "./rewardCard.scss";

export const RewardCard = ({ img, name, desc, price }) => {
  return (
    <div className="RewardCard">
      <img className="rew-img" src={img} alt="" />
      <h3>{name}</h3>
      <p>{desc}</p>
      <button>
        <img src="./images/dc.png" alt="" /> {price}
      </button>
    </div>
  );
};
