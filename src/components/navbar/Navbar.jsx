import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  const navigate =useNavigate();
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <img className="edu-logo" src="./images/logo2.png" alt="" />
            <img className="edu-word" onClick={()=>navigate('/')} src="./images/Eduleague.png" alt="" />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-option" onClick={()=>navigate('/')}>Home</div>
          <div className="nav-option">Create Quiz</div>
          <div className="nav-option">Join Quiz</div>
          <div className="nav-option" onClick={()=>navigate("/about")}>About Us</div>
          <div className="nav-option">FAQ</div>
          <div className="nav-option log-in">Log in</div>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};
