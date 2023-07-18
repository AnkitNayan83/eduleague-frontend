import React, { useState } from "react";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import "./rewards.scss";
import { RewardCard } from "../../components/rewardCard/RewardCard";
import { rewardsData } from "./data";

export const Rewards = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="rewards">
      <Navbar2 pageName={"Rewards"} />
      <div className="wrapper">
        <div className="container">
          <div className="left">
            <div
              className={"rew-option" + (active ? " active" : "")}
              onClick={() => setActive(true)}
            >
              Reward Items
            </div>
            <div
              className={"rew-option" + (!active ? " active" : "")}
              onClick={() => setActive(false)}
            >
              Coupon Code
            </div>
          </div>
          <div className="right">
            {active
              ? rewardsData.map((item, i) => {
                  if (item.type === "reward")
                    return (
                      <RewardCard
                        img={item.img}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        key={i}
                      />
                    );
                  else return null;
                })
              : rewardsData.map((item, i) => {
                  if (item.type !== "reward")
                    return (
                      <RewardCard
                        img={item.img}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        key={i}
                      />
                    );
                  else return null;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};
