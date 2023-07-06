import React, { useState, useEffect } from "react";
import axios from "axios";
import { Lost } from "../../components/lost/Lost";
import { Win } from "../../components/win/Win";
import { Score } from "../../components/score/Score";
import "./oneV.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { PropagateLoader } from "react-spinners";

export const OneV = () => {
  const user = useSelector((state) => state.auth.user);

  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);

  const handelClick = () => {
    navigate("/");
    window.location.reload(false);
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        dispatch(showLoading());
        const response = await axios.put(
          `https://eduleague-6le7o.ondigitalocean.app/api/v1/quiz/${quizId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        setResponse(response.data);
        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  return (
    <div className="wrapper">
      <div className="oneV-container">
        {loading ? (
          <div className="spinner-I">
            <h3>Please wait while we prepare result for you</h3>
            <PropagateLoader color="#fff" />
          </div>
        ) : (
          <div className="white-box">
            <div className="left-wrap">
              {user?._id == response?.winner?.user?._id ? (
                <Win winAmount={response?.quiz?.entryCoins} />
              ) : (
                <Lost winAmount={response?.quiz?.entryCoins} />
              )}
              {/* render according to result */}
            </div>
            <div className="righti">
              <div className="right-wrap">
                {response?.sortedParticipants?.length > 0 ? (
                  <>
                    <Score
                      marks={response?.sortedParticipants[0]?.totalMarks}
                      mesg={"Your Score"}
                    />
                    <div className="div">Vs</div>
                    <Score
                      marks={response?.sortedParticipants[1]?.totalMarks}
                      mesg={"Opponent Score"}
                    />
                  </>
                ) : (
                  <p>No participants found</p>
                )}
              </div>

              <div className="btn">
                <button className="btn-result" onClick={handelClick}>
                  {" "}
                  Go home{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};