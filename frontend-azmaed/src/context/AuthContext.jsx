import { createContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { getMyDataService } from "../services/index";
=======
import { getMyDataService } from "../services";
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e

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
<<<<<<< HEAD
        setToken(null);
=======
        setToken("null");
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
        setUser(null);
        console.error(error);
      }
    };

    if (token) getUserData();
  }, [token]);

  const logout = () => {
<<<<<<< HEAD
    setToken(null);
=======
    setToken("null");
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
    setUser(null);
    localStorage.removeItem("token");
  };

  const login = (newToken) => {
<<<<<<< HEAD
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

=======
    setToken(token);
    localStorage.setItem("token",newToken);
  };


>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 
