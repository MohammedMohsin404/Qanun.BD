import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import routes from "./Routes";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
);
