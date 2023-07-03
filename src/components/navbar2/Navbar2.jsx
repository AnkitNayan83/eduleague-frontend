import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar2.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

export const Navbar2 = () => {
  const navigate = useNavigate();
  const user = true;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <img className="edu-logo" src="./images/logo2.png" alt="" />
            <img
              className="edu-word"
              onClick={() => navigate("/")}
              src="./images/Eduleague.png"
              alt=""
            />
          </div>
        </div>
        <div className="nav-right">
          {user && (
            <div className="nav-wallet">
              <span>1000</span>
              <img src="./images/wallet.png" alt="" />
            </div>
          )}
          {user && (
            <div className="nav-menu">
              <MenuIcon className="i-menu" onClick={() => setShowMenu(true)} />
            </div>
          )}
        </div>
      </div>
      <div className={"nav-card " + (showMenu ? "active" : "")}>
        <div className="top">
          <Close className="cx" onClick={() => setShowMenu(false)} />
        </div>
        <div className="nav-user-info">
          <div className="left">
            <img src="./images/prof.png" alt="" />
          </div>
          <div className="right">
            <span className="name-info">Ankit Nayan</span>
            <span className="mob-info">9988776655</span>
          </div>
        </div>
        <div className="nav-quiz-info">
          <div className="left" onClick={()=> navigate("/joinQuiz")}>
            <small>create</small> <strong>quiz</strong>
          </div>
          <div className="right" onClick={()=> navigate('/createQuiz')}>
            <small>join</small> <strong>quiz</strong>
          </div>
        </div>
        <div className="nav-menu-options">
          <div className="menu-option">Profile and KYC</div>
          <div className="menu-option" onClick={()=> navigate('/wallet')}>Wallet</div>
          <div className="menu-option">Analyse</div>
          <div className="menu-option">Leaderboard</div>
          <div className="menu-option" onClick={()=> navigate('/about')}>About Us</div>
          <div className="menu-option">FAQ</div>
          <div className="menu-option">Help and Support</div>
          <div className="menu-option">Privacy Policy &TC</div>
        </div>
      </div>
    </div>
  );
};
