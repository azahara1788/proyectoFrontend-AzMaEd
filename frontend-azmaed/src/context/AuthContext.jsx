import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import { getMyDataService } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);

        console.log("data de authcontext", data);

        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };

    if (token) getUserData();
  }, [token, setToken]);

  const logout = () => {
    setToken("");
    setUser();
  };

  const login = (token) => {
    setToken(token);
  };

  const isUser = () => token && token.token !== "";

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};
