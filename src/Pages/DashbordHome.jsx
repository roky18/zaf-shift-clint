import React from "react";
import UseRole from "../Hooks/UseRole";
import Loading from "./Shared/Loading";
import AdminDashHome from "./AdminDashHome";
import RiderDashHome from "./RiderDashHome";
import UserDashHome from "./UserDashHome";

const DashbordHome = () => {
  const { role, roleLoading } = UseRole();

  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin") {
    return <AdminDashHome></AdminDashHome>;
  } else if (role === "rider") {
    return <RiderDashHome></RiderDashHome>;
  } else {
    return <UserDashHome></UserDashHome>;
  }
};

export default DashbordHome;
