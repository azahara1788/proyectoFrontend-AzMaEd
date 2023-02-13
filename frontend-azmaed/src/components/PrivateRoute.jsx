import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isUser } = useContext(AuthContext);

  if (isUser()) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
