
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
//import { LoginPage } from "./pages/LoginPage";
//import { HomePage } from "./pages/HomePage";
//import { UserPage } from "./pages/UserPage";
import { PrivateRoute } from "./components/PrivateRoute";
/* import { NotesUserPage } from "./pages/NotesUserPage"; */
//import { Notepage } from "./pages/NotePage";
import { RegisterPage } from "./pages/RegisterPage";
import { useThemeContext } from "./context/ThemeContext";
import { Theme } from "./components/Theme";
import {Footer} from "./components/Footer";

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <Header />
      <Theme />

      <main className={theme}>
        <Routes>
          {/* Esta es la portada, debería aparecer a todo el mundo */}
          <Route path="/" element={<p>aqui va el homePage</p>} />
          {/* Esta es la portada privada de usuario, es una ruta privada y debería mostrar las categorías de usuario */}
          <Route
            path="/note"
            element={
              <PrivateRoute>
            {/*     <NotesUserPage /> */}
              </PrivateRoute>
            }
          />
          <Route
            path="/notes"
            element={<p>todas las notas Pagina NotesAllPage</p>}
          />

          {/* LLegarías a esta ruta despues de clicar en una categoria de la ruta anterior (también debe ser privada) */}
          {/* Debería mostrar las notas de la categoría */}
          <Route
            path="/notes/category/:id"
            element={
              <p>
                sacar notas por categorias "categorypage" componente "listar
                notas por categoria"
              </p>
            }
          />

          {/* Página de nota específica si la nota es pública debe mostrarla y si no redirigiar a login o mostrar un error */}
          <Route
            path="/note/:id"
            element={
              <PrivateRoute>
               {/*  <Notepage /> */}
              </PrivateRoute>
            }
          />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/user"
            element={
              <PrivateRoute>
                {/* <UserPage /> */}
              </PrivateRoute>
            }
          />

          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </main>
      <Footer /> 
    </>
  );
}

export default App;



