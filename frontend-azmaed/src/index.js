import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
/* import { AuthContextProviderComponent } from "./context/AuthContext"; */
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>

    <ThemeProvider>
    {/* <AuthContextProviderComponent> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
   {/*  </AuthContextProviderComponent> */}
    </ThemeProvider>
  
  </React.StrictMode>
);


