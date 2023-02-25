import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../services/index";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService({ token });

        setUser(data);
      } catch (error) {
        setToken(null);
        setUser(null);
        console.error("Error en AuthContext: ", error);
      }
    };

    if (token) getUserData();
  }, [token]);

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const updateUser = (newData) => {
    setUser({ ...user, ...newData });
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
