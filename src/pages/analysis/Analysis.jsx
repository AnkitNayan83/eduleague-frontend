import React, { useEffect, useState } from "react";
import { LostAnalysis } from "../../components/lostAnalysis/LostAnalysis";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import { WonAnalysis } from "../../components/wonAnalysis/WonAnalysis";
import "./analysis.scss";
import { axiosRequest } from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { HashLoader } from "react-spinners";

export const Analysis = () => {
  const [isWonPageVisible, setIsWonPageVisible] = useState(true);
  const [won, setWon] = useState([]);
  const [loss, setLoss] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.alerts.loading);

  useEffect(() => {
    const getAnalysis = async () => {
      dispatch(showLoading());
      try {
        const { data } = await axiosRequest.get("/quiz/analysis", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setWon(data?.winQuiz);
        setLoss(data.lossQuiz);
        dispatch(hideLoading());
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    };
    getAnalysis();
    // eslint-disable-next-line
  }, []);

  const handleWonPageClick = () => {
    setIsWonPageVisible(true);
  };

  return (
    <div className="analysis-container">
      <Navbar2 pageName={"analysis"} />
      <div className="analysis-wrapper">
        {loading ? (
          <div className="analysis-spinner">
            <HashLoader color="#fff" />
            <span>Loading Please wait</span>
          </div>
        ) : (
          <div className="analysis-container2">
            <div className="left-part">
              <div
                className={isWonPageVisible ? "box won active" : "box won"}
                onClick={handleWonPageClick}
              >
                <h3>Won</h3>
                <h5>{won?.length}</h5>
              </div>
              <div
                className={isWonPageVisible ? "box loss" : "box loss active"}
                onClick={() => setIsWonPageVisible(false)}
              >
                <h3>Loss</h3>
                <h5>{loss?.length}</h5>
              </div>
            </div>
            <div className="right-part">
              {isWonPageVisible
                ? won?.map((item, i) => (
                    <WonAnalysis
                      key={i}
                      name={item.course}
                      opponenet={item.participants[1].user.fName}
                      date={item.startTime.split("T")[0]}
                      price={item.entryCoins + item.entryCoins * 0.6}
                    />
                  ))
                : loss?.map((item, i) => (
                    <LostAnalysis
                      key={i}
                      name={item.course}
                      opponenet={item.participants[0].user.fName}
                      price={item.entryCoins}
                      date={item.startTime.split("T")[0]}
                    />
                  ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
