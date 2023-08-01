import React from "react";
import "./rewardCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircleOutline } from "@mui/icons-material";
import { toast } from "react-toastify";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { axiosRequest } from "../../axiosInstance";
import { setUser } from "../../redux/slice/authSlice";

export const RewardCard = ({ img, name, desc, price, rewardId }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const isBought = () => {
    const arr = user?.rewards;
    for (let i = 0; i < arr?.length; i++) {
      if (rewardId === arr[i]) return true;
    }

    return false;
  };

  const handelBought = async () => {
    try {
      if (user?.balance < price) {
        toast.error("You dont have enough coins to purchase this");
        return;
      }
      if (
        window.confirm(
          `Are you sure you want to purchase ${name} for ${price} coins`
        )
      ) {
        dispatch(showLoading());
        const { data } = await axiosRequest.put(
          `/reward/${rewardId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const res = await axiosRequest.post(
          "/user/get-user-auth",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(setUser(res.data.user));
        dispatch(hideLoading());
      } else {
        dispatch(hideLoading());
        console.log("nope");
        return;
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  return (
    <div className="RewardCard">
      <img className="rew-img" src={img} alt="" />
      <h3>{name}</h3>
      <p>{desc}</p>
      {!isBought() ? (
        <button onClick={handelBought}>
          <img src="./images/dc.png" alt="" /> {price}
        </button>
      ) : (
        <div className="paid">
          <CheckCircleOutline />
          <span>Bought</span>
        </div>
      )}
    </div>
  );
};
