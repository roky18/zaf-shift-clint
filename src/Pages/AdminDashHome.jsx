import React from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminDashHome = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: deliveryStats = [] } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-3xl text-center my-3 text-pink-500">
        Admin Dash Home
      </h1>
      <div className="stats flex flex-col text-center gap-2 shadow">
        {deliveryStats.map((stat) => (
          <div key={stat._id} className="stat ">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-2xl font-semibold">{stat._id}</div>
            <div className="stat-value">{stat.count}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashHome;
