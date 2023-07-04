import React, { useEffect, useState } from "react";
import { QuestionCard } from "../../components/questionCard/QuestionCard";
import { useParams } from "react-router-dom";

export const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const params = useParams();

  useEffect(() => {
    const getQuestions = async () => {
      try {
        // const {data} =
      } catch (error) {
        console.log(error);
      }
    };
  }, [params.quizId]);

  // const fetchQuestions = async () => {
  //   try {
  //     // Fetch questions from parent

  //     const dummyQues = [
  //       {
  //         course: "12th (CBSE)",
  //         subject: "Physics",
  //         topic: "Miscellaneous",
  //         question: "The surface considered for Gauss’s law is called ?",
  //         options: [
  //           "Plane surface",
  //           "Gaussian surface",
  //           "Closed surface",
  //           "Spherical surface",
  //         ],
  //         correctAnswer: "Gaussian surface",
  //         _id: "646ecb1250a266f53cc5e9e7",
  //         __v: 0,
  //       },
  //       {
  //         course: "12th (CBSE)",
  //         subject: "Physics",
  //         topic: "Miscellaneous",
  //         question:
  //           "A soap bubble is given a negative charge, then its radius ?",
  //         options: [
  //           "decreases",
  //           "may increase or decrease",
  //           "remains unchanged",
  //           "increases",
  //         ],
  //         correctAnswer: "increases",
  //         _id: "64a2b07a7b53c1e0897c72e5",
  //         __v: 0,
  //       },
  //       {
  //         course: "12th (CBSE)",
  //         subject: "Physics",
  //         topic: "Miscellaneous",
  //         question: "When a glass rod is rubbed with silk, it ?",
  //         options: [
  //           "gives protons to silk.",
  //           "gains protons from silk.",
  //           "gives electrons to silk.",
  //           "gains electrons from silk.",
  //         ],
  //         correctAnswer: "gives electrons to silk.",
  //         _id: "64a2b07a7b53c1e0897c72e6",
  //         __v: 0,
  //       },
  //       {
  //         course: "12th (CBSE)",
  //         subject: "Physics",
  //         topic: "Miscellaneous",
  //         question: "Electric field in a cavity of metal ?",
  //         options: [
  //           "is always zero",
  //           "depends upon the surroundings",
  //           "is not necessarily zero",
  //           "depends upon the size of cavity",
  //         ],
  //         correctAnswer: "is not necessarily zero",
  //         _id: "64a2b07a7b53c1e0897c72e7",
  //         __v: 0,
  //       },
  //     ];

  //     setQuestions(dummyQues);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleNextQuestion = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setCorrectAnswer(correctAnswer + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSkipQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion}
          handleNextQuestion={handleNextQuestion}
          handleSkipQuestion={handleSkipQuestion}
        />
      ) : (
        // we can show result page
        <p>No questions available for the selected topic.</p>
      )}
    </div>
  );
};
