import React from "react";
import "./header.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-top">
          <h1>Boost your brainpower and</h1>
          <h1 className="header-top-wallet">
            your <span>wallet</span>
          </h1>
          <p>join our league and turn knowledege into rewards</p>

          <button>Get started</button>
        </div>
        <div className="header-middle">
          <img src="./images/Group.png" alt="" />
        </div>
        <div className="header-bottom">
          <div className="header-bottom-card">
            <img src="./images/question1.png" alt="" className="bottom-icon1" />
            <h3>Quiz Creation</h3>
            <p>
              Allow users to create quizzes with multiple choice questions and
              choose topics they want
            </p>
            <div className="card-arrow">
              <ArrowForwardIcon className="a1" />
            </div>
          </div>
          <div className="header-bottom-card">
            <img src="./images/question1.png" alt="" className="bottom-icon1" />
            <h3>Quiz Creation</h3>
            <p>
              Allow users to create quizzes with multiple choice questions and
              choose topics they want
            </p>
            <div className="card-arrow">
              <ArrowForwardIcon className="a1" />
            </div>
          </div>
          <div className="header-bottom-desc">
            <h2>
              <span>Create</span> your own quiz and <br />
              <span>join quiz</span> created by others{" "}
            </h2>
            <p>
              Gain valuable knowledge with our interactive quiz and earn cash
              prize
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
