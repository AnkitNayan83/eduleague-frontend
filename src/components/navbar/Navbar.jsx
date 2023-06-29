import React from "react";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <img className="edu-logo" src="./images/logo2.png" alt="" />
            <img className="edu-word" src="./images/Eduleague.png" alt="" />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-option">Home</div>
          <div className="nav-option">Create Quiz</div>
          <div className="nav-option">Join Quiz</div>
          <div className="nav-option">About Us</div>
          <div className="nav-option">FAQ</div>
          <div className="nav-option log-in">Log in</div>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};
