import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { axiosRequest } from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { HashLoader } from "react-spinners";

export const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.alerts.loading);

  const handelLogin = async () => {
    if (!phoneNo || !password) {
      toast.error("Please provide all fields");
      return;
    }
    try {
      dispatch(showLoading());
      const { data } = await axiosRequest.post("/auth/login", {
        phoneNo,
        password,
      });
      dispatch(hideLoading());
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/");
        toast.success("logged in successfully");
      } else {
        toast.error("wrong mobile number or password");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      toast.error("wrong mobile number or password");
    }
  };

  return (
    <div className="login">
      <Helmet>
        <title>{"Eduleague | Login"}</title>
        <meta
          name="description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:title" content={"Eduleague | Login"} />
        <meta
          property="og:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:image" content={"./images/logo.png"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Eduleague | Login"} />
        <meta
          name="twitter:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta name="twitter:image" content={"./images/logo.png"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {loading && (
        <div className="spinner">
          <HashLoader color="#333" />
          <span>Loading Please wait</span>
        </div>
      )}
      <div className="nav">
        <Link to="/">
          <ArrowBackIos className="p-ar" />
        </Link>
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
              <img src="./images/lg.gif" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="r-top">
              <h5>
                Dont have an account?{" "}
                <Link to="/register">
                  <span>Create</span>
                </Link>
              </h5>
            </div>
            <div className="r-middle">
              <div className="form-item">
                <label htmlFor="phone">Phone no</label>
                <input
                  onChange={(e) => setPhoneNo(e.target.value)}
                  type="text"
                  id="phone"
                />
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="apssword"
                />
              </div>
              <div className="form-info">
                <div className="form-rem">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="form-fog">forgot password?</div>
              </div>
              <button className="signIn" onClick={handelLogin}>
                Sign up
              </button>
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
