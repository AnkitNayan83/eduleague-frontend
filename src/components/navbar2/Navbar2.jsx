import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar2.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowBackIos, Close, NavigateNext } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeUser } from "../../redux/slice/authSlice";

export const Navbar2 = ({ pageName }) => {
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
    <div className="navbar2">
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"}>
            <ArrowBackIos className="p-ar" />
          </Link>
          <span>Home</span>
          <NavigateNext />
          <span>{pageName}</span>
        </div>
        <div className="nav-right">
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
            <img src={"./images/prof.png"} alt="" />
          </div>
          <div className="right">
            <span className="name-info">
              {user?.fName + " " + (user?.lName || "")}
            </span>
            <span className="mob-info">{user?.phoneNo}</span>
          </div>
        </div>
        <div className="nav-quiz-info">
          <div className="left" onClick={() => navigate("/joinQuiz")}>
            <small>create</small> <strong>quiz</strong>
          </div>
          <div className="right" onClick={() => navigate("/createQuiz")}>
            <small>join</small> <strong>quiz</strong>
          </div>
        </div>
        <div className="nav-menu-options">
          <div className="menu-option">Profile and KYC</div>
          <div className="menu-option" onClick={() => navigate("/wallet")}>
            Wallet
          </div>
          <div className="menu-option">Analyse</div>
          <div className="menu-option">Leaderboard</div>
          <div className="menu-option" onClick={() => navigate("/about")}>
            About Us
          </div>
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
