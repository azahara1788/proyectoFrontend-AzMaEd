import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useCategories from "../hooks/useCategories";
import useNotes from "../hooks/useNotes";
import { ListCategory } from "../components/ListCategory";
import { ListNotes } from "../components/ListNotes";
import "./NotesUserPage.css";

export const NotesUserPage = () => {
  const { user } = useContext(AuthContext);
  const { categories, error, loading } = useCategories();
  const { notes, errorNotes, loadingNotes } = useNotes();

  if (!user || loading || loadingNotes) return <p>Cargando...</p>;

  if (error || errorNotes) return <p>Error</p>;

  return (
    <main>
      <h2>Bienvenid@, {user.name}</h2>
      <section className="notes">
        <section className="categorias">
          <h3>Categorías:</h3>
          <ListCategory categories={categories} />
        </section>
        <section className="note">
          <h3>Lista de notas:</h3>
          <ListNotes notes={notes} />
        </section>
      </section>
    </main>
  );
};
