import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import AuthImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="w-8/12 mx-auto">
      <Logo></Logo>
      <div className="flex items-center">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={AuthImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
