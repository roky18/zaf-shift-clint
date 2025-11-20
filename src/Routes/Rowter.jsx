import { createBrowserRouter, Route } from "react-router";
import rootLayout from "../Layouts/rootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error from "../Pages/Error";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import Rider from "../Pages/Rider";
import PrivateRotu from "./PrivateRotu";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/service_center.json").then((res) => res.json()),
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/rider",
        element: (
          <PrivateRotu>
            <Rider></Rider>
          </PrivateRotu>
        ),
      },

      {
        path: "*",
        Component: Error,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
