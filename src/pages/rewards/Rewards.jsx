import React, { useEffect, useState } from "react";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import "./rewards.scss";
import { RewardCard } from "../../components/rewardCard/RewardCard";
import { toast } from "react-toastify";
import { axiosRequest } from "../../axiosInstance";
import { HashLoader } from "react-spinners";
import { useSelector } from "react-redux";

export const Rewards = () => {
  const [active, setActive] = useState(true);
  const [data, setData] = useState([]);
  const loading = useSelector((state) => state.alerts.loading);

  useEffect(() => {
    const getRewards = async () => {
      try {
        const { data } = await axiosRequest.get("/reward/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(data.reward);
      } catch (error) {
        toast.error("No rewards availabe at this time");
        console.log(error);
      }
    };

    getRewards();
  }, []);

  return (
    <div className="rewards">
      <Navbar2 pageName={"Rewards"} />
      <div className="wrapper">
        <div className="container">
          {loading ? (
            <div className="rew__load">
              <HashLoader />
              <p>Loading please wait</p>
            </div>
          ) : (
            <>
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
                  ? data?.map((item, i) => {
                      if (item.type === "reward")
                        return (
                          <RewardCard
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            rewardId={item._id}
                            key={i}
                          />
                        );
                      else return null;
                    })
                  : data?.map((item, i) => {
                      if (item.type !== "reward")
                        return (
                          <RewardCard
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                            rewardId={item._id}
                            key={i}
                          />
                        );
                      else return null;
                    })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
