import { createBrowserRouter } from "react-router";
import rootLayout from "../Layouts/rootLayout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: rootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
