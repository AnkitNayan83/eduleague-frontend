import React, { useState } from "react";
import { Navbar2 } from "../../components/navbar2/Navbar2";
import "./createQuiz.scss";
import { subjectsData } from "./option-data";
import { Add, Remove } from "@mui/icons-material";
import { Instruction } from "../../components/instruction/Instruction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const CreateQuiz = () => {
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [entryCoins, setEntryCoins] = useState(10);
  const [showInstruction, setShowInstruction] = useState(false);
  const [quizType, setQuizType] = useState("single");
  const [capacity, setCapacity] = useState(2);
  const user = useSelector((state) => state.auth.user);

  const handelChangeCourse = (e) => {
    setCourse(e.target.value);
    setSubject("");
  };

  const handelChangeSubject = (e) => {
    setSubject(e.target.value);
    setTopic("");
  };

  const handelChangeTopic = (e) => {
    setTopic(e.target.value);
  };

  const handelChangeCoins = (type) => {
    if (type === "add") setEntryCoins(entryCoins + 5);
    else {
      if (entryCoins !== 10) setEntryCoins(entryCoins - 5);
    }
  };

  const handelInstruction = () => {
    if (course === "" || subject === "" || topic === "") {
      toast.error("all fields are required");
      return;
    } else {
      setShowInstruction(true);
    }
  };

  const handelType = (e) => {
    if (e.target.value === "single") {
      setQuizType(e.target.value);
      setCapacity(2);
    } else {
      setQuizType(e.target.value);
    }
  };

  return (
    <div className="createQuiz">
      <Navbar2 pageName={"createQuiz"} />
      <div className="wrapper">
        {!showInstruction ? (
          <div className="container">
            <div className="left">
              <h1>Quiz Creation</h1>
              <p>
                Allow users to create quizzes with multiple choice questions and
                choose topics they want
              </p>
            </div>
            <div className="right">
              <div className="options">
                {user?.isAdmin && (
                  <div className="quiz__type">
                    <div className="admin_type">
                      <label htmlFor="type">Type:</label>
                      <select name="type" id="type" onChange={handelType}>
                        <option value="single">Single</option>
                        <option value="community">Community</option>
                      </select>
                    </div>
                    <div className="admin_input">
                      <label htmlFor="">Capacity:</label>
                      <input
                        id="capacity"
                        type="number"
                        placeholder="enter the number of players"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        disabled={quizType === "single"}
                      />
                    </div>
                  </div>
                )}
                <select name="course" id="course" onChange={handelChangeCourse}>
                  <option value="">Select Course</option>
                  <option value="12th (CBSE)">Class 12th</option>
                  <option value="Cricket">Cricket</option>
                  <option value="General Knowledge">General Knowledge</option>
                </select>
                <select
                  name="subject"
                  onChange={handelChangeSubject}
                  disabled={!course}
                  id="subject"
                >
                  <option value="">Select Subject</option>
                  {subjectsData.map((item, i) => {
                    if (item.id === course) {
                      return (
                        <option key={i} value={item.subject}>
                          {item.subject}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </select>

                <select
                  name="topic"
                  onChange={handelChangeTopic}
                  disabled={!subject || !course}
                  id="topic"
                >
                  <option value="">Select Topic</option>
                  {subjectsData.map((item, i) => {
                    if (item.id === course && item.subject === subject) {
                      return (
                        <option key={i} value={item.topic}>
                          {item.topic}
                        </option>
                      );
                    } else {
                      return null;
                    }
                  })}
                </select>
              </div>
              <div className="price">
                <div className="price-left">
                  <div className="price-top">Choose a desire amount</div>
                  <div className="price-counter">
                    <Add
                      className="price-icon"
                      onClick={() => handelChangeCoins("add")}
                    />
                    <span>{entryCoins}</span>
                    <Remove
                      className="price-icon"
                      onClick={() => handelChangeCoins("sub")}
                    />
                  </div>
                </div>
                <div className="price-right">
                  <span>
                    "Note - if you put <strong>Rs 10</strong> , you will get{" "}
                    <strong>10+6=RS 16</strong>{" "}
                  </span>
                </div>
              </div>
              <button className="create-btn" onClick={handelInstruction}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <Instruction
            course={course}
            subject={subject}
            topic={topic}
            entryCoins={entryCoins}
            type={quizType}
            capacity={capacity}
            hideInstruction={setShowInstruction}
          />
        )}
      </div>
    </div>
  );
};
