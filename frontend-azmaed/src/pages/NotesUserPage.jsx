import "./NotesUserPage.css";
import "../components/List.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useCategories from "../hooks/useCategories";
import Modal from "../components/Modal";

import { ListCategory } from "../components/ListCategory";
import { NewCategory } from "../components/NewCategory";

export const NotesUserPage = () => {
  const { user } = useContext(AuthContext);
  const { categories, errorCat, loading } = useCategories();

  if (!user || loading) return <p>Cargando...</p>;

  if (errorCat) return <p>{errorCat}</p>;

  return (
    <section className="userpage">
      <h2>¡Hola {user.name}!</h2>

      <section className="categorias">
        <h3>Categorías:</h3>
        <Modal label="+ Categoría">
          <NewCategory />
        </Modal>
   

        <ListCategory categories={categories} />
      </section>
    </section>
  );
};
