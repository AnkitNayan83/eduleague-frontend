import React, { useState } from "react";
import { QuestionCard } from "../../components/questionCard/QuestionCard";
import { Result } from "../../components/result/Result";
import "./question.scss";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Questions = () => {
  const location = useLocation();
  const type = location.state.type;
  // eslint-disable-next-line
  const [startTime, setStartTime] = useState(Date.now());
  // eslint-disable-next-line
  const [questions, setQuestions] = useState(location.state.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [correctAnswer, setCorrectAnswer] = useState(0);
  let [skipAnswer, setSkipAnswer] = useState(0);
  const params = useParams();
  const user = useSelector((state) => state.auth.user);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = async (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSkipQuestion = async () => {
    setSkipAnswer((prevSkipAnswer) => prevSkipAnswer + 1);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="question-container">
      {currentQuestion ? (
        <div className="question-wrapper">
          <h3 className="question-heading">
            {" "}
            Question {currentQuestionIndex + 1}/10{" "}
          </h3>

          <QuestionCard
            question={currentQuestion}
            handleNextQuestion={handleNextQuestion}
            handleSkipQuestion={handleSkipQuestion}
          />
        </div>
      ) : (
        // we can show result page
        <Result
          correctAnswer={correctAnswer}
          skipAnswer={skipAnswer}
          quizId={params.quizId}
          creatorId={user._id}
          partId={location.state.participant}
          startTime={startTime}
          type={type}
        />
      )}
    </div>
  );
};
