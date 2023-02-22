import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useThemeContext } from "./context/ThemeContext";
import { UserPage } from "./pages/UserPage";
import ErrorBoundary from "./ErrorBoundary";
import { PrivateRoute } from "./components/PrivateRoute";
import { Header } from "./components/Header";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { NotesUserPage } from "./pages/NotesUserPage";
import { NotePage } from "./pages/NotePage";
import { UserRoute } from "./components/UserRoute";
import { CategoryPage } from "./pages/CategoryPage";
import { NoteAllPage } from "./pages/NoteAllPage";
import { Footer } from "./components/Footer";

function App() {
  const { theme } = useThemeContext();
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="App" id={theme}>
        <ErrorBoundary
          key={location.pathname}
          fallback={<h2>Error en la section</h2>}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/note"
              element={
                <PrivateRoute>
                  <NotesUserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/notes"
              element={
                <PrivateRoute>
                  <NoteAllPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/notes/category/:id"
              element={
                <PrivateRoute>
                  <CategoryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/note/:id"
              element={
                <PrivateRoute>
                  <NotePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <UserRoute>
                  <LoginPage />
                </UserRoute>
              }
            />
            <Route
              path="/register"
              element={
                <UserRoute>
                  <RegisterPage />
                </UserRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route /* path="*" */ path="/notfound" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      {/*  <Footer /> */}
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
    </>
  );
}

export default App;



