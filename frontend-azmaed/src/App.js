import { Theme } from "./components/Theme";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useThemeContext } from "./context/ThemeContext";
import { UserPage } from "./pages/UserPage";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const { theme } = useThemeContext();
  const location = useLocation();
  return (
    <>
      <main className="App" id={theme}>
        <Theme />
        <ErrorBoundary
          key={location.pathname}
          fallback={<h2>Error en la section</h2>}
        >
          <Routes>
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route /* path="*" */ path="/notfound" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
    </>
  );
}

export default App;
