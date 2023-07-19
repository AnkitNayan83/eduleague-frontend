import React, { useEffect } from "react";
import "./result.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { axiosRequest } from "../../axiosInstance";
export const Result = ({
  correctAnswer,
  skipAnswer,
  quizId,
  startTime,
  partId,
  type,
}) => {
  const totalQuestions = 10;
  const incorrectAnswer = totalQuestions - (correctAnswer + skipAnswer);
  const negativeMarking = 0.25;
  const finalScore = correctAnswer - incorrectAnswer * negativeMarking;
  const [showSharePopup, setShowSharePopup] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);
  const user = useSelector((state) => state.auth.user);
  const [isCreator, setIsCreator] = useState(false);
  const handleShareClick = () => {
    setShowSharePopup(true);
  };

  const closeSharePopup = () => {
    setShowSharePopup(false);
  };
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/");
    window.location.reload(false);
  };

  const handleResult = () => {
    if (type === "community") {
      navigate(`/leaderboard/${quizId}`);
    } else {
      navigate(`/result/${quizId}`, {
        state: {
          finalScore: finalScore,
          quizId: quizId,
        },
      });
    }
  };
  useEffect(() => {
    const saveParticipantQ = async () => {
      try {
        dispatch(showLoading());
        const endTime = Date.now();
        const id = partId;
        const totalMarks = correctAnswer - 0.25 * incorrectAnswer;
        const timeTaken = Math.floor((endTime - startTime) / 1000);
        console.log(correctAnswer, incorrectAnswer, skipAnswer);
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
        setIsCreator(data.quiz.creator === user?._id);
        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };
    saveParticipantQ();
    // console.log('1')
    // eslint-disable-next-line
  }, []);

  return (
    <div className="result-one">
      <div className="white-box">
        <h3 className="green1">Your Quiz is live!</h3>
        <div className="part">
          <div className="purple-box">
            <h3>Score</h3>
            <h2>
              {finalScore}/{totalQuestions}
            </h2>
          </div>

          <div className="right">
            <div className="upper">
              <div className="total-question">
                <div className="lefti">
                  <span className="blue"></span>
                </div>
                <div className="righti">
                  <p>10</p>
                  <p className="grey">Total Question</p>
                </div>
              </div>

              <div className="total-question">
                <div className="lefti">
                  <span className="green"></span>
                </div>
                <div className="righti">
                  <p>{correctAnswer}/10</p>
                  <p className="grey">Correct Question</p>
                </div>
              </div>
            </div>

            <div className="upper">
              <div className="total-question">
                <div className="lefti">
                  <span className="yellow"></span>
                </div>
                <div className="righti">
                  <p>{skipAnswer}/10</p>
                  <p className="grey">Skipped Question</p>
                </div>
              </div>

              <div className="total-question">
                <div className="lefti">
                  <span className="red"></span>
                </div>
                <div className="righti">
                  <p>{incorrectAnswer}/10</p>
                  <p className="grey">Incorrect Question</p>
                </div>
              </div>
            </div>

            <div className="btn-container1">
              {(isCreator && type === "single") || type === "community" ? (
                <button className="skip btn1" onClick={handleShareClick}>
                  Share
                </button>
              ) : (
                ""
              )}
              {loading ? (
                <div>Your result is being processed</div>
              ) : !isCreator || type === "community" ? (
                <button className="next btn1" onClick={handleResult}>
                  View Result
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="btn-container2">
          <button className="home-btn" onClick={handelClick}>
            Go to Home
          </button>
        </div>
      </div>
      {showSharePopup && (
        <div className="share-popup">
          <div className="share-popup-content">
            <h3>Share with friends</h3>
            <input
              type="text"
              value={`https://eduleague.in/joinQuiz/${quizId}`}
              readOnly
              onClick={(e) => e.target.select()}
            />
            <button onClick={closeSharePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
