import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, WalletOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const loading = useSelector((state) => state.alerts.loading);

  const handelLogOut = () => {
    localStorage.clear();
    dispatch(removeUser());
    toast.success("logged out successfully");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo" onClick={() => navigate("/")}>
            <img className="edu-logo" src="./images/logo2.png" alt="" />
            <h3>Eduleague</h3>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-option" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="nav-option" onClick={() => navigate("/createQuiz")}>
            Create Quiz
          </div>
          <div className="nav-option" onClick={() => navigate("/joinQuiz")}>
            Join Quiz
          </div>
          <div className="nav-option" onClick={() => navigate("/about")}>
            About Us
          </div>
          <div
            className="nav-option"
            onClick={() => navigate("/privacyPolicy")}
          >
            Privacy Policy
          </div>
          {loading ? (
            <BeatLoader color="#000" />
          ) : (
            <>
              {user && (
                <Link to={"/wallet"}>
                  <div className="nav-wallet">
                    <span>{user?.balance}</span>
                    <WalletOutlined />
                  </div>
                </Link>
              )}
              {user && (
                <div className="nav-menu">
                  <MenuIcon
                    className="i-menu"
                    onClick={() => setShowMenu(true)}
                  />
                </div>
              )}
              {!user && (
                <Link to="/login">
                  <div className="nav-option log-in">Log in</div>{" "}
                </Link>
              )}
              {!user && (
                <Link to="/register">
                  <button>Sign up</button>{" "}
                </Link>
              )}
            </>
          )}
        </div>
      </div>
      <div className={"nav-card " + (showMenu ? "active" : "")}>
        <div className="top">
          <Close className="cx" onClick={() => setShowMenu(false)} />
        </div>
        <div className="nav-user-info">
          <div className="left">
            <img src="./images/prof.svg" alt="" />
          </div>
          <Link to={"/editProfile"}>
            <div className="right">
              <span className="name-info">
                {user?.fName + " " + (user?.lName || "")}
              </span>
              <span className="mob-info">{user?.phoneNo}</span>
              <span className="ref-code">Referral: {user?.referralCode}</span>
            </div>
          </Link>
        </div>
        <div className="nav-quiz-info">
          <div className="left" onClick={() => navigate("/createQuiz")}>
            <small>create</small> <strong>quiz</strong>
          </div>
          <div className="right" onClick={() => navigate("/joinQuiz")}>
            <small>join</small> <strong>quiz</strong>
          </div>
        </div>
        <div className="nav-menu-options">
          <Link to="/editProfile">
            <div className="menu-option">Profile and KYC</div>
          </Link>
          <Link to={"/wallet"}>
            <div className="menu-option">Wallet</div>
          </Link>
          <Link to={"/analysis"}>
            <div className="menu-option">Analyse</div>
          </Link>
          <Link to={"/rewards"}>
            <div className="menu-option">Rewards</div>
          </Link>
          <Link to={"/about"}>
            <div className="menu-option">About Us</div>
          </Link>
          <a href="/#faq">
            <div className="menu-option"> FAQ</div>
          </a>
          <Link to="/privacyPolicy">
            <div className="menu-option">Privacy Policy</div>
          </Link>
          <div className="menu-option">Help and Support</div>
          <div className="menu-option" onClick={handelLogOut}>
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};
