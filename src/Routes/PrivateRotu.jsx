import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRotu = ({ children }) => {
  const { user, Loading } = useAuth();
  const location = useLocation();
  console.log("location", location);

  if (Loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRotu;
