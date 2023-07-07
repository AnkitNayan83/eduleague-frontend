import React, { useEffect, useState } from "react";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { QuizCard } from "../../components/quizCard/QuizCard";
import "./joinQuiz.scss";
import { axiosRequest } from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { PropagateLoader } from "react-spinners";

export const JoinQuiz = () => {
  const [quizes, setQuizes] = useState([]);
  const [selectedQuizType, setSelectedQuizType] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);

  useEffect(() => {
    const getQuiz = async () => {
      const token = localStorage.getItem("token");
      try {
        dispatch(showLoading());
        const { data } = await axiosRequest.get("/quiz/get-quizes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(hideLoading());
        setSelectedQuizType("community");
        setQuizes(data);
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };
    getQuiz();
    // eslint-disable-next-line
  }, []);

  const handleQuizTypeClick = (quizType) => {
    setSelectedQuizType(quizType);
  };
  return (
    <div className="background">
      <Navbar2 pageName={"Join Quiz"} />
      <div className="join-container">
        <div className="left-part">
          <h3 className="join-h3">JOIN QUIZ</h3>
          <p>Join quizzes created by others and earn cash rewards</p>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => handleQuizTypeClick("community")}
            >
              Group quiz ＞
            </button>
            <button
              className="btn"
              onClick={() => handleQuizTypeClick("single")}
            >
              One on One ＞
            </button>
          </div>
        </div>
        <div className="right-part">
          {loading && (
            <div className="spin">
              <h2>Loading please wait</h2> <PropagateLoader color="#fff" />
            </div>
          )}
          {selectedQuizType === "single" && (
            <>
              <h4 className="join-h4">Single Quiz</h4>
              {quizes.singleQuizes &&
                quizes.singleQuizes.map((quiz) => (
                  <QuizCard key={quiz._id} quiz={quiz} />
                ))}
            </>
          )}
          {selectedQuizType === "community" && (
            <>
              <h4 className="join-h4">Community Quiz</h4>
              {quizes.communityQuizes &&
                quizes.communityQuizes.map((quiz) => (
                  <QuizCard key={quiz._id} quiz={quiz} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
