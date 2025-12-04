import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "http://zaf-shift-server-three.vercel.app",
});

const UseAxios = () => {
  return axiosInstance;
};

export default UseAxios;
