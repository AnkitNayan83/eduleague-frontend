import React, { useEffect, useState } from "react";
import "./joinQuizCard.scss";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { useNavigate, useParams } from "react-router-dom";
import { axiosRequest } from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/slice/alertSlice";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

export const JoinQuizCard = () => {
  const [quiz, setQuiz] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);
  const quizId = params.quizId;
  const navigate = useNavigate();

  useEffect(() => {
    const getQuiz = async () => {
      try {
        dispatch(showLoading());
        const { data } = await axiosRequest.get(`/quiz/${quizId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(hideLoading());
        console.log(data.quiz);
        setQuiz(data?.quiz);
      } catch (error) {
        console.log(error);
        dispatch(hideLoading());
      }
    };
    getQuiz();
    // eslint-disable-next-line
  }, [quizId]);

  const handelParticipant = async () => {
    try {
      dispatch(showLoading());
      const res = await axiosRequest.post(
        `/participant/create/${quizId}`,
        { entryCoins: quiz?.entryCoins },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data && res.data.success) {
        navigate(`/quiz/${quizId}`, {
          state: {
            questions: quiz?.questions,
            participant: res.data?.savedParticipant._id,
            type: quiz?.type,
          },
        });
      } else {
        toast.error(res.data.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  return (
    <div className="JQC">
      {loading ? (
        <div className="spinner">
          <HashLoader color="#fff" />
          <span>Loading Please wait</span>
        </div>
      ) : (
        <>
          <Navbar2 />
          <div className="JQC-wrapper">
            <div className="JQC-container">
              <div className="top">
                <h1>
                  {quiz?.type === "single" ? "1v1 Quiz" : "Coomunity"} Quiz
                </h1>
                <h3>
                  Created by{" "}
                  {quiz?.creator?.fName + " " + (quiz?.creator?.lName || "")}
                </h3>
              </div>
              <div className="middle">
                <div className="quiz-opt">Course {quiz?.course}</div>
                <div className="quiz-opt">Subject {quiz?.subject}</div>
                <div className="quiz-opt">Topic {quiz?.topic}</div>
              </div>
              <div className="bottom">
                <span>
                  Seats left: {quiz?.capacity - quiz?.noOfParticipants}
                </span>
                <div className="JQC-btn">
                  <button className="max-price">
                    Win upto{" "}
                    <strong>
                      {(quiz?.entryCoins || 0) + (quiz?.entryCoins || 0) * 0.6}
                    </strong>
                  </button>
                  <button className="join" onClick={handelParticipant}>
                    Join Now Rs {quiz?.entryCoins}
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};
