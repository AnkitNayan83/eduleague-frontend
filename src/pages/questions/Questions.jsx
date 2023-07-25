import React, { useEffect, useState } from "react";
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
  let currentQuestion = questions[currentQuestionIndex];

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

  const [seconds, setSeconds] = useState(location.state.duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      setSkipAnswer((prev) => prev + 10 - currentQuestionIndex);
    }
    // eslint-disable-next-line
  }, [seconds]);

  return (
    <div className="question-container">
      {currentQuestion && seconds >= 0 ? (
        <div className="question-wrapper">
          <div className="question-heading">
            <h3> Question {currentQuestionIndex + 1}/10 </h3>
            <h2>{`${String(Math.floor((seconds % 3600) / 60)).padStart(
              2,
              "0"
            )}:${String(seconds % 60).padStart(2, "0")}`}</h2>
          </div>

          <QuestionCard
            question={currentQuestion}
            handleNextQuestion={handleNextQuestion}
            handleSkipQuestion={handleSkipQuestion}
          />
        </div>
      ) : (
        // we can show result page
        <>
          <Result
            correctAnswer={correctAnswer}
            skipAnswer={skipAnswer}
            quizId={params.quizId}
            creatorId={user._id}
            partId={location.state.participant}
            startTime={startTime}
            type={type}
          />
        </>
      )}
    </div>
  );
};
