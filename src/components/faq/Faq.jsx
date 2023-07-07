import React from "react";
import "./faq.scss";

export const Faq = () => {
  return (
    <div className="faq" id="faq">
      <div className="faq-container">
        <div className="top">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="bottom">
          <div className="faq-options">
            <div className="faq-option">
              <details>
                <summary>
                  <span>How can I play quizzes on the app?</span>
                </summary>
                <p>
                  To play quizzes on the app, you need to create an account and
                  add funds to your wallet. Then, you can browse and select a
                  quiz to play. Once you start the quiz, you have to answer the
                  questions as fast and accurately as possible. The player with
                  the highest score and the shortest completion time wins.
                </p>
              </details>
            </div>
            <div className="faq-option">
              <details>
                <summary>
                  <span> How can I create a quiz on the app?</span>
                </summary>
                <p>
                  To create a quiz on the app, you need to create an account and
                  go to the “Create Quiz” section. You can then add questions,
                  multiple-choice answers, and correct answers. You can also set
                  the time limit and the entry fee for your quiz. Once your quiz
                  is published, other players can compete in it and win prizes.
                </p>
              </details>
            </div>
            <div className="faq-option">
              <details>
                <summary>
                  <span> How are the winners determined?</span>
                </summary>
                <p>
                  The winners are determined based on their score and completion
                  time. The player with the highest score and the shortest
                  completion time wins the quiz. In case of a tie, the prize
                  money is split between the winners.
                </p>
              </details>
            </div>
            <div className="faq-option">
              <details>
                <summary>
                  <span> How do I add funds to my wallet?</span>
                </summary>
                <p>
                  You can add funds to your wallet using various payment methods
                  such as credit card, debit card, PayPal, or bank transfer. Go
                  to the “Wallet” section and select the payment method of your
                  choice.
                </p>
              </details>
            </div>
            <div className="faq-option">
              <details>
                <summary>
                  <span>Is it safe to add funds to my wallet?</span>
                </summary>
                <p>
                  Yes, it is safe to add funds to my wallet. You have all
                  control on your money and you can use that money to earn more
                  using your knowledge.
                </p>
              </details>
            </div>
            <div className="faq-option">
              <details>
                <summary>
                  <span>Can I withdraw my winnings from the app?</span>
                </summary>
                <p>
                  Yes, you can withdraw your winnings to your bank account or
                  PayPal account. Go to the “My wallet” section and select the
                  withdrawal method of your choice. Note that there may be some
                  processing fees and withdrawal limits.
                </p>
              </details>
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
