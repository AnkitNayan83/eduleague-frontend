import React, { useState } from "react";
import "./register.scss";
import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import validator from "validator";
import { axiosRequest } from "../../axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

export const Register = () => {
  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.alerts.loading);

  const handelRegister = async () => {
    if (!phoneNo || !fName || !password) {
      toast.error("please provide all fields");
      return;
    }
    if (!validator.isMobilePhone(phoneNo)) {
      alert("Enter a valid mobile number");
      return;
    } else if (phoneNo.length !== 10) {
      alert("Enter a 10 digit valid mobile number");
      return;
    } else {
      try {
        dispatch(showLoading());
        const { data } = await axiosRequest.post("/auth/register", {
          fName,
          lName,
          phoneNo,
          password,
          referral,
        });
        dispatch(hideLoading());
        if (data.success) {
          localStorage.setItem("token", data?.token);
          navigate("/");
        } else {
          toast.error("please provide all details");
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      <Helmet>
        <title>{"Eduleague | Register"}</title>
        <meta
          name="description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:title" content={"Eduleague | Register"} />
        <meta
          property="og:description"
          content={
            "Eduleague is a quiz game where you can earn money by playing quiz"
          }
        />
        <meta property="og:image" content={"./images/logo.png"} />
        <meta property="og:url" content={"URL of your page"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={"Eduleague | Register"} />
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
                <input
                  onChange={(e) => setFname(e.target.value)}
                  type="text"
                  id="fName"
                />
              </div>
              <div className="form-item">
                <label htmlFor="lNmae">Last Name</label>
                <input
                  onChange={(e) => setLName(e.target.value)}
                  type="text"
                  id="lName"
                />
              </div>
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
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                />
              </div>
              <div className="form-item">
                <label htmlFor="cPassword">
                  Referral Code{" "}
                  <small>(You and your friend both will get +25 coins)</small>
                </label>
                <input
                  onChange={(e) => setReferral(e.target.value)}
                  type="text"
                  id="cPassword"
                />
              </div>
              <button className="signIn" onClick={handelRegister}>
                Register
              </button>
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
