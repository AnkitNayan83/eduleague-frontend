import React from "react";
import { Navigate } from "react-router-dom";

export const NoUserRoute = ({ children }) => {
  if (!localStorage.getItem("token")) return children;
  else return <Navigate to="/" />;
};
