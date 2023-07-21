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
  const [topic, setTopic] = useState("");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const getQuiz = async () => {
      const token = localStorage.getItem("token");
      try {
        dispatch(showLoading());
        const { data } = await axiosRequest.get(
          `/quiz/get-quizes?course=${course}&subject=${subject}&topic=${topic}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(hideLoading());
        setSelectedQuizType("community");
        console.log(data);
        setQuizes(data);
      } catch (error) {
        setQuizes([]);
        dispatch(hideLoading());
        console.log(error);
      }
    };
    getQuiz();
  }, [course, subject, topic]);

  const handleQuizTypeClick = (quizType) => {
    setSelectedQuizType(quizType);
  };

  const handelClear = () => {
    setCourse("");
    setTopic("");
    setSubject("");
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
          {loading ? (
            <div className="spin">
              <h2>Loading please wait</h2> <PropagateLoader color="#fff" />
            </div>
          ) : (
            <>
              <div className="quiz__filter">
                <select
                  name="course"
                  id="course"
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="" selected={course === ""}>
                    Select Course
                  </option>
                  <option
                    value="12th (CBSE)"
                    selected={course === "12th (CBSE)"}
                  >
                    12th
                  </option>
                  <option value="Cricket" selected={course === "Cricket"}>
                    Cricket
                  </option>
                  <option
                    value="General Knowledge"
                    selected={course === "General Knowledge"}
                  >
                    General Knowledge
                  </option>
                </select>
                <select
                  name="subject"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="" selected={subject === ""}>
                    Select Subject
                  </option>
                  <option value="Physics" selected={subject === "Physics"}>
                    Physics
                  </option>
                  <option value="NA" selected={subject === "NA"}>
                    NA
                  </option>
                </select>
                <select
                  name="topic"
                  id="topic"
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option value="" selected={topic === ""}>
                    Select Topic
                  </option>
                  <option
                    value="Miscellaneous"
                    selected={topic === "Miscellaneous"}
                  >
                    Miscellaneous
                  </option>
                  <option value="NA" selected={topic === "NA"}>
                    NA
                  </option>
                </select>
                <span className="cf" onClick={handelClear}>
                  Clear Filter
                </span>
              </div>
              {selectedQuizType === "single" && (
                <>
                  <h4 className="join-h4">Single Quiz</h4>
                  {(quizes?.singleQuizes?.length || 0) === 0 && (
                    <h2 className="not__found">Quizzes not found</h2>
                  )}
                  {quizes?.singleQuizes &&
                    quizes?.singleQuizes.map((quiz) => (
                      <QuizCard key={quiz._id} quiz={quiz} />
                    ))}
                </>
              )}
              {selectedQuizType === "community" && (
                <>
                  <h4 className="join-h4">Community Quiz</h4>
                  {(quizes?.communityQuizes?.length || 0) === 0 && (
                    <h2 className="not__found">Quizzes not found</h2>
                  )}
                  {quizes?.communityQuizes &&
                    quizes?.communityQuizes.map((quiz) => (
                      <QuizCard key={quiz._id} quiz={quiz} />
                    ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
