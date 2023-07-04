import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar2.scss";
import { ArrowBackIos, NavigateNext } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeUser } from "../../redux/slice/authSlice";

export const Navbar2 = ({ pageName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      </div>
    </div>
  );
};
