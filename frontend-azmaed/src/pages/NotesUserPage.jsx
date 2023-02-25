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
  const { categories, error, loading } = useCategories();
  // const { notes, errorNotes, loadingNotes } = useNotes();

  if (!user || loading) return <p>Cargando...</p>;

  if (error) return <p>Error</p>;

  return (
    <section className="userpage">
      <h2>Bienvenid@, {user.name}</h2>

      <section className="categorias">
        <h3>Categorías:</h3>
        <Modal label="categoria">
          <NewCategory />
        </Modal>

        <ListCategory categories={categories} />
      </section>
    </section>
  );
};
