import React, { useState } from "react";
import "./instruction.scss";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { PropagateLoader } from "react-spinners";

export const Instruction = ({
  subject,
  course,
  topic,
  entryCoins,
  type,
  capacity,
  hideInstruction,
  questionnaireBy,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);
  const navigate = useNavigate();

  const handelCreateQuiz = async () => {
    try {
      dispatch(showLoading());
      const token = localStorage.getItem("token");
      const { data } = await axiosRequest.post(
        "/quiz/create",
        { course, subject, topic, entryCoins, type, capacity, questionnaireBy },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(hideLoading());
      setTimeout(() => endQuiz(data?.quiz._id), 24 * 60 * 60 * 1000);
      if (type === "single") {
        navigate(`/quiz/${data?.quiz._id}`, {
          state: {
            questions: data?.questions,
            participant: data?.quiz.participants[0]._id,
            type: data?.quiz.type,
            duration: data?.duration,
          },
        });
        toast.success("Quiz created Successfully");
      } else {
        navigate("/");
        toast.success("Community quiz created Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const endQuiz = async (qz) => {
    try {
      const { data } = await axiosRequest.put(`/quiz/${qz}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"instruction" + (loading ? " tp" : "")}>
      {loading ? (
        <div className="spinner-I">
          <PropagateLoader color="#fff" />
          <h3>Please wait while we prepare quiz for you</h3>
        </div>
      ) : (
        <>
          <div className="Itop">
            <div className="Ileft">
              <div className="Ichoices">Course-{course}</div>
              <div className="Ichoices">Subject-{subject}</div>
              <div className="Ichoices">Topic-{topic}</div>
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
                For every correct answer ,you will get +1 and for wrong ans
                -0.25
              </li>
              <li>
                You will appear the test first, then it would be taken by other
                person , the one with highest score with least time will win the
                quiz
              </li>
              <li>
                After the quiz you can analyse the test and challenge your
                friends
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
        </>
      )}
    </div>
  );
};
