import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);

        console.log("data de authcontext", data);

        setUser(data);
      } catch (error) {
        setToken("null");
        setUser(null);
      }
    };

    if (token) getUserData();
  }, [token]);

  const logout = () => {
    setToken("null");
    setUser(null);
    localStorage.removeItem("token");
  };

  const login = (newToken) => {
    setToken(token);
    localStorage.setItem("token",newToken);
  };


  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 
