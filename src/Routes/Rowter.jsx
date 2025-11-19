import { createBrowserRouter } from "react-router";
import rootLayout from "../Layouts/rootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage";

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
    ],
  },
]);
