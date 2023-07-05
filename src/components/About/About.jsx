import React from "react";
import "./about.scss";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-edu">
      <div className="abt-container">
        <div className="left">
          <h5>About Eduleague</h5>
          <h2>What is Eduleague?</h2>
          <p>
            EduLeague is an innovative platform that allows individuals to
            create and participate in quizzes, while also offering the
            opportunity to win cash prizes. With its unique combination of
            education and gaming,
            <br />
            <br />
            The platform provides users with the ability to create their own
            quizzes on various subjects, ranging from general knowledge to
            specific academic topics.
          </p>
          <Link to={"/joinQuiz"}>
            <button>Join Now</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-wrapper">
            <img src="./images/yg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
