import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthContextProviderComponent } from "./context/AuthContext";
import ErrorBoundary from "./ErrorBoundary";
=======
/* import { AuthContextProviderComponent } from "./context/AuthContext"; */
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
<<<<<<< HEAD
    <ErrorBoundary>
      <ThemeProvider>
        <AuthContextProviderComponent> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </AuthContextProviderComponent> 
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
=======

    <ThemeProvider>
    {/* <AuthContextProviderComponent> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
   {/*  </AuthContextProviderComponent> */}
    </ThemeProvider>
  
  </React.StrictMode>
);


>>>>>>> fd9328ba9b63052f5a147806419c7b0e009e3a9e
