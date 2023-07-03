import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/slice/alertSlice";
import { axiosRequest } from "../../axiosInstance";
import { setUser } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const { data } = await axiosRequest.post(
        "/user/get-user-auth",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (data.success) {
        dispatch(setUser(data.user));
      } else {
        localStorage.clear();
        navigate("/login");
        toast.error("Your session expired please login again");
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
      localStorage.clear();
      navigate("/login");
      toast.error("Your session expired please login again");
    }
  };

  useEffect(() => {
    if (!user) {
      localStorage.getItem("token") && getUser();
    }
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
