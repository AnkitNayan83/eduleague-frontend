import React from "react";
import "./mobileAdd.scss";

export const MobileAdd = () => {
  return (
    <div className="mobileAdd">
      <div className="container">
        <div className="left">
          <div className="img-wrapper">
            <img src="./images/mob.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h4>Mobile App</h4>
          <h2>Download our quiz league app now!</h2>
          <div className="store-logo">
            <img src="./images/google.png" alt="" />
            <img src="./images/apple.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
