import React, { useState } from "react";
import { QuestionCard } from "../../components/questionCard/QuestionCard";
import { Result } from "../../components/result/Result";
import "./question.scss";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "../../axiosInstance";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";

export const Questions = () => {
  const location = useLocation();
  // eslint-disable-next-line
  const [questions, setQuestions] = useState(location.state.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let [correctAnswer, setCorrectAnswer] = useState(0);
  let [skipAnswer, setSkipAnswer] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const currentQuestion = questions[currentQuestionIndex];

  // const saveParticipant = async()=>{}

  const handleNextQuestion = async (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswer((prevCorrectAnswer) => prevCorrectAnswer + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex >= 9) {
      try {
        dispatch(showLoading());
        const id = location.state.participant;
        const incorrectAnswer = 10 - correctAnswer - skipAnswer;
        const totalMarks = correctAnswer - 0.25 * incorrectAnswer;
        const timeTaken = 60;
        console.log(incorrectAnswer, correctAnswer, skipAnswer);
        // eslint-disable-next-line
        const { data } = await axiosRequest.put(
          `/participant/update/${id}`,
          {
            correctAnswers: correctAnswer,
            incorrectAnswers: incorrectAnswer,
            skippedQuestions: skipAnswer,
            totalAttempted: 10,
            totalMarks,
            timeTaken,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    }
  };

  const handleSkipQuestion = async () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSkipAnswer((prevSkipAnswer) => prevSkipAnswer + 1);
    if (currentQuestionIndex >= 9) {
      try {
        dispatch(showLoading());
        const id = location.state.participant;
        const incorrectAnswer = 10 - correctAnswer - skipAnswer;
        const totalMarks = correctAnswer - 0.25 * incorrectAnswer;
        const timeTaken = 60;
        console.log(incorrectAnswer, correctAnswer, skipAnswer);
        // eslint-disable-next-line
        const { data } = await axiosRequest.put(
          `/participant/update/${id}`,
          {
            correctAnswers: correctAnswer,
            incorrectAnswers: incorrectAnswer,
            skippedQuestions: skipAnswer,
            totalAttempted: 10,
            totalMarks,
            timeTaken,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    }
  };

  return (
    <div className="question-container">
      {/* <Navbar2 pageName={"Create Quiz"} /> */}
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
        />
      )}
    </div>
  );
};
