import React from "react";
import useAuth from "../Hooks/useAuth";
import UseRole from "../Hooks/UseRole";
import Loading from "../Pages/Shared/Loading";
import Forbiden from "../Pages/Forbiden";

const RiderRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { role, roleLoading } = UseRole();

  if (loading || !user || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "rider") {
    return <Forbiden></Forbiden>;
  }
  return children;
};

export default RiderRoute;
