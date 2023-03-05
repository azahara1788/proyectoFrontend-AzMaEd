import "./CategoryPage.css";
/* import "../App.css"; */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListNotesByCategory } from "../components/ListNotesByCategory";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";
import useNotes from "../hooks/useNotes";
import useCategory from "../hooks/useCategory";

export const CategoryPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { notes, errorNotes, loadingNotes } = useNotes();
  const { category } = useCategory(id);

  if (!user || loadingNotes) return <Loading />;

  if (errorNotes) return <p>Error</p>;

  return (
    <section className="categoryPage">
      <ListNotesByCategory notes={notes} id={id} category={category} />

      <section className="linkAnadirNota">
        <Link to={`/notes/category/${id}/newNote`}> Añadir nota </Link>
      </section>
    </section>
  );
};
