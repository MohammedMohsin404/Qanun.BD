// src/routes/PrivateRoute.jsx
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./provider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div > <span className="loading loading-ring loading-xl "></span></div>;

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
