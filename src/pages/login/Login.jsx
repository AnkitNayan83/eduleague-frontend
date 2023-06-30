import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import React from "react";
import "./login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="nav">
        <ArrowBackIos className="p-ar" />
        <span>Home</span>
        <NavigateNext className="n-ar" />
        <span>Login</span>
      </div>
      <div className="login-container">
        <div className="login-card">
          <div className="left">
            <div className="l-top">
              <h1>Welcome Back!</h1>
              <p>Sign up or login to play the quizz league</p>
            </div>
            <div className="l-bottom">
              <img src="./images/login.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="r-top">
              <h4>
                Dont have an account? <span>Create</span>
              </h4>
            </div>
            <div className="r-middle">
              <div className="form-item">
                <label htmlFor="phone">Phone no</label>
                <input type="text" id="phone" />
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input type="password" id="apssword" />
              </div>
              <div className="form-info">
                <div className="form-rem">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="form-fog">forgot password?</div>
              </div>
              <button className="signIn">Sign up</button>
            </div>
            <div className="r-bottom">
              <span>or</span>
              <span>Sing in with</span>
              <img src="./images/social.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
