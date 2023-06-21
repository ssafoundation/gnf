import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
