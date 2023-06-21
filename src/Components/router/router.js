import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import MainHeader from "../Common/Header/MainHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "blog-details/:id",
    element: (
      <div>
        <MainHeader />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Registration />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
]);
export default router;
