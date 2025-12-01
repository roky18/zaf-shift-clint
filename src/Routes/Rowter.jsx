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
import Sendparcel from "../Pages/Sendparcel";
import DashBordLayout from "../Layouts/DashBordLayout";
import MyParcels from "../Pages/DashBord/MyParcels";
import Payment from "../Pages/DashBord/Payment";
import PaymentSuccess from "../Pages/DashBord/PaymentSuccess";
import PaymentCancel from "../Pages/DashBord/PaymentCancel";
import PaymentHistroy from "../Pages/DashBord/PaymentHistroy";
import ApproveRider from "../Pages/DashBord/ApproveRider";
import UserManagement from "../Pages/DashBord/UserManagement";
import Forbiden from "../Pages/Forbiden";
import AdminRoute from "./AdminRoute";

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
        loader: () => fetch("/service_center.json").then((res) => res.json()),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRotu>
            <Sendparcel></Sendparcel>
          </PrivateRotu>
        ),
        loader: () => fetch("/service_center.json").then((res) => res.json()),
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
  {
    path: "dashbord",
    element: (
      <PrivateRotu>
        <DashBordLayout></DashBordLayout>
      </PrivateRotu>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-canceled",
        Component: PaymentCancel,
      },
      {
        path: "payment-history",
        Component: PaymentHistroy,
      },
      {
        path: "approve-rider",
        element: (
          <AdminRoute>
            <ApproveRider></ApproveRider>
          </AdminRoute>
        ),
      },
      {
        path: "forbidden-page",
        Component: Forbiden,
      },
      {
        path: "user-management",
        element: (
          <AdminRoute>
            <UserManagement></UserManagement>
          </AdminRoute>
        ),
      },
    ],
  },
]);
