import React, { useEffect, useState } from "react";
import "./leaderboard.scss";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { LeaderboardCard } from "../../components/leaderboardCard/LeaderboardCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { axiosRequest } from "../../axiosInstance";
import { HashLoader } from "react-spinners";

export const Leaderboard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);
  const [participants, setParticipants] = useState([]);
  const quizId = params.quizId;

  useEffect(() => {
    const getQuiz1 = async () => {
      try {
        dispatch(showLoading());
        const { data } = await axiosRequest.get(`/quiz/${quizId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(hideLoading());
        console.log(data.quiz);
        setParticipants(data?.sortedParticipants);
      } catch (error) {
        console.log(error);
        dispatch(hideLoading());
      }
    };
    getQuiz1();
    // eslint-disable-next-line
  }, [quizId]);

  return (
    <div className="leaderboard">
      {loading ? (
        <div className="spinner">
          <HashLoader color="#333" />
          <span>Loading Please wait</span>
        </div>
      ) : (
        <>
          <Navbar2 pageName={"create Quiz > Leaderboard"} />
          <div className="container">
            <div className="top">
              <h1>Quiz Result</h1>
            </div>
            <div className="bottom">
              <LeaderboardCard
                rank={"Rank"}
                score={"Score"}
                name={"User Name"}
                time={"Time taken"}
              />
              {participants?.map((item, i) => (
                <Leaderboard
                  key={i}
                  rank={i + 1}
                  score={item.totalMarks}
                  name={item.user.fName + " " + (item.user.lName || "")}
                  time={item.timeTaken}
                />
              ))}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};
