import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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
          <div className="nav-option" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="nav-option">Create Quiz</div>
          <div className="nav-option">Join Quiz</div>
          <div className="nav-option" onClick={() => navigate("/about")}>
            About Us
          </div>
          <div className="nav-option">FAQ</div>
          {user && (
            <Link to={"/wallet"}>
              <div className="nav-wallet">
                <span>{user?.balance}</span>
                <img src="./images/wallet.png" alt="" />
              </div>
            </Link>
          )}
          {user && (
            <div className="nav-menu">
              <MenuIcon className="i-menu" onClick={() => setShowMenu(true)} />
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
          <Link to={"/editProfile"}>
            <div className="right">
              <span className="name-info">
                {user?.fName + " " + user?.lName}
              </span>
              <span className="mob-info">{user?.phoneNo}</span>
            </div>
          </Link>
        </div>
        <div className="nav-quiz-info">
          <div className="left">
            <small>create</small> <strong>quiz</strong>
          </div>
          <div className="right">
            <small>join</small> <strong>quiz</strong>
          </div>
        </div>
        <div className="nav-menu-options">
          <div className="menu-option">Profile and KYC</div>
          <div className="menu-option">Wallet</div>
          <div className="menu-option">Analyse</div>
          <div className="menu-option">Leaderboard</div>
          <div className="menu-option">About Us</div>
          <div className="menu-option">FAQ</div>
          <div className="menu-option">Help and Support</div>
          <div className="menu-option" onClick={handelLogOut}>
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};
