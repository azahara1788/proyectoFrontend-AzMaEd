import "./components/Header.css";
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
import { EditCategoryPage } from "./pages/EditCategoryPage";
import { NoteAllPage } from "./pages/NoteAllPage";
import { Footer } from "./components/Footer";
import { UserEditPage } from "./pages/UserEditPage";
import { Menu } from "./components/MenuPincipal";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { NewNotePage } from "./pages/NewNotePage";
import { EditNotePage } from "./pages/EditNotePage";

function App() {
  const { theme } = useThemeContext();
  const location = useLocation();
  const { user, token } = useContext(AuthContext);

  return (
    <>
      <Header />

      <main id={theme}>
        {user && token ? <Menu /> : null}
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
              path="/notes/category/edit/:id"
              element={
                <PrivateRoute>
                  <EditCategoryPage />
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
              path="/notes/category/:id/newNote"
              element={
                <PrivateRoute>
                  <NewNotePage />
                </PrivateRoute>
              }
            />

            <Route
              path="/note/edit/:id"
              element={
                <PrivateRoute>
                  <EditNotePage />
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
            <Route
              path="/user/edit"
              element={
                <PrivateRoute>
                  <UserEditPage />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <ToastContainer position="bottom-center" pauseOnHover theme="colored" />
    </>
  );
}

export default App;
