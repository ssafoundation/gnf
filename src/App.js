import React from "react";
import { RouterProvider } from "react-router-dom";

import router from "./Components/router/router";
import "./main.scss";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
