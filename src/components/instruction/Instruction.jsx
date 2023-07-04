import React from "react";
import "./instruction.scss";

export const Instruction = ({
  subject,
  course,
  topic,
  entryCoins,
  hideInstruction,
}) => {
  const handelCreateQuiz = async () => {
    console.log(subject, course, topic, entryCoins);
  };
  return (
    <div className="instruction">
      <div className="Itop">
        <div className="Ileft">
          <div className="choices">Course-{course}</div>
          <div className="choices">Subject-{subject}</div>
          <div className="choices">Topic-{topic}</div>
        </div>
        <div className="Iright">
          <span>Money you have to put</span>
          <div className="final-coins">Rs {entryCoins}</div>
        </div>
      </div>
      <div className="Imiddle">
        <div className="I-icons">
          <div className="I-icon">
            <img src="./images/Questions.png" alt="" />
            <span>10 Questions</span>
          </div>
          <div className="I-icon">
            <img src="./images/Clock.png" alt="" />
            <span>5 Miniutes</span>
          </div>
        </div>
      </div>
      <div className="I-desc">
        <h1>Instructions</h1>
        <ul>
          <li>
            For every correct answer ,you will get +1 and for wrong ans -0.25
          </li>
          <li>
            You will appear the test first, then it would be taken by other
            person , the one with highest score with least time will win the
            quiz
          </li>
          <li>
            After the quiz you can analyse the test and challenge your friends
          </li>
          <li>You will win 60% of profit if you win.</li>
        </ul>
      </div>
      <div className="Ibottom">
        <button className="back" onClick={() => hideInstruction(false)}>
          Back
        </button>
        <button className="next" onClick={handelCreateQuiz}>
          Next
        </button>
      </div>
    </div>
  );
};
