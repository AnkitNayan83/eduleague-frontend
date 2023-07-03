import React, { useState } from 'react';

export const QuestionCard = (props) => {
  const { question, handleNextQuestion, handleSkipQuestion } = props;
  const { question: questionText, options } = question;

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    // Pass the selected option to the onNextQuestion callback
    handleNextQuestion(selectedOption);
    setSelectedOption('');
  };

  return (
    <div>
      <h4>Question:</h4>
      <p>{questionText}</p>
      <h4>Options:</h4>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleSkipQuestion}>Skip</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
