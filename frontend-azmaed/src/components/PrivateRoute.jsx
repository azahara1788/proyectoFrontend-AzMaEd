import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
