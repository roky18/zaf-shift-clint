import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseRole = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const { isLoading: roleLoading, data } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);

      return res.data;
    },
  });
  return { role: data?.role || "user", roleLoading };
};

export default UseRole;
