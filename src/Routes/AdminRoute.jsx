import React, { Children } from "react";
import useAuth from "../Hooks/useAuth";
import Loading from "../Pages/Shared/Loading";
import UseRole from "../Hooks/UseRole";
import Forbiden from "../Pages/Forbiden";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = UseRole();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "admin") {
    return <Forbiden></Forbiden>;
  }
  return children;
};

export default AdminRoute;
