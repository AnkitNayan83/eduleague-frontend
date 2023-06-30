import React from "react";
import "./register.scss";
import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register">
      <div className="nav">
        <Link to="/">
          <ArrowBackIos className="p-ar" />
        </Link>
        <span>Home</span>
        <NavigateNext className="n-ar" />
        <span>Register</span>
      </div>
      <div className="register-container">
        <div className="register-card">
          <div className="left">
            <div className="l-top">
              <h1>Welcome Back!</h1>
              <p>Sign up or register to play the quizz league</p>
            </div>
            <div className="l-bottom">
              <img src="./images/login.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="r-middle">
              <div className="form-item">
                <label htmlFor="fName">First Name</label>
                <input type="text" id="fName" />
              </div>
              <div className="form-item">
                <label htmlFor="lNmae">Last Name</label>
                <input type="text" id="lName" />
              </div>
              <div className="form-item">
                <label htmlFor="phone">Phone no</label>
                <input type="text" id="phone" />
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="form-item">
                <label htmlFor="cPassword">Confirm Password</label>
                <input type="password" id="cPassword" />
              </div>
              <button className="signIn">Register</button>
            </div>
            <div className="r-bottom">
              <span>
                Already have an account?{" "}
                <Link to="/login">
                  <strong>Sign in</strong>{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
