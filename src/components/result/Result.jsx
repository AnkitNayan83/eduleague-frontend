import React from "react";
import "./result.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Result = ({ correctAnswer, skipAnswer, quizId, creatorId }) => {
  const totalQuestions = 10;
  const incorrectAnswer = totalQuestions - (correctAnswer + skipAnswer);
  const negativeMarking = 0.25; // Negative marking value for each incorrect answer
  const finalScore = correctAnswer - incorrectAnswer * negativeMarking;
  const [showSharePopup, setShowSharePopup] = useState(false);

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

  const handleResult = () =>{
    navigate(`/result/${quizId}`,{
      state: {
        finalScore: finalScore,
        quizId:quizId
      },
    });
    // window.location.reload(false);
  }

  return (
    <div className="result-one">
      <div className="white-box">
        <h3 className="green1">Your Quiz is live!</h3>
        <div className="part">
          <div className="purple-box">
            <h3>Your Score</h3>
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
              <button className="skip btn1"  onClick={handleShareClick}>Share</button>
              <button className="next btn1" onClick={handleResult}>View Result</button>
            </div>
            <div className="btn-container2">
              <button className="home-btn" onClick={handelClick}>
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
      {showSharePopup && (
        <div className="share-popup">
          <div className="share-popup-content">
            <h3>Share with friends</h3>
            <input
              type="text"
              value={`http://localhost:3000/joinQuiz/${quizId}`}
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
