import React from "react";
import "./faq.scss";
import { Add } from "@mui/icons-material";

export const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-container">
        <div className="top">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="bottom">
          <div className="faq-options">
            <div className="faq-option">
              <span>How can I play quizzes on the app?</span>
              <Add />
            </div>
            <div className="faq-option">
              <span> How can I create a quiz on the app?</span>
              <Add />
            </div>
            <div className="faq-option">
              <span> How are the winners determined?</span>
              <Add />
            </div>
            <div className="faq-option">
              <span> How do I add funds to my wallet?</span>
              <Add />
            </div>
            <div className="faq-option">
              <span>Is it safe to add funds to my wallet?</span>
              <Add />
            </div>
            <div className="faq-option">
              <span>Can I withdraw my winnings from the app?</span>
              <Add />
            </div>
          </div>
          <div className="faq-img">
            <div className="img-wrapper">
              <img src="./images/faq.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
