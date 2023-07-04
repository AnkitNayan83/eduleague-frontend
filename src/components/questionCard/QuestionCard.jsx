import React, { useState } from "react";
import "./questionCard.scss";
export const QuestionCard = (props) => {
  const { question, handleNextQuestion, handleSkipQuestion } = props;
  const { question: questionText, options } = question;

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    // Pass the selected option to the onNextQuestion callback
    handleNextQuestion(selectedOption);
    setSelectedOption("");
  };

  return (
    <div className="question-card">
      <p className="question">{questionText}</p>
      <div className="options">
        {options.map((option, index) => (
          <div
            className={`option ${selectedOption === option ? "selected" : ""}`}
            key={index}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div
        className="btn-container1
      "
      >
        <button onClick={handleSkipQuestion} className="skip btn1">
          Skip
        </button>
        <button
          onClick={handleNextClick}
          disabled={!selectedOption}
          className="next btn1"
        >
          Next
        </button>
      </div>
    </div>
  );
};
