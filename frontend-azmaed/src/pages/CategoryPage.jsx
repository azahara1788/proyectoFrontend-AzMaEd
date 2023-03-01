import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListNotesByCategory } from "../components/ListNotesByCategory";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import "./CategoryPage.css";
/* import "../App.css"; */

import useNotes from "../hooks/useNotes";

export const CategoryPage = () => {
  const { user } = useContext(AuthContext);
  const { notes, errorNotes, loadingNotes } = useNotes();
  const { id } = useParams();

  if (!user || loadingNotes) return <Loading />;

  if (errorNotes) return <p>Error</p>;

  return (
    <section className="categoryPage">
      <ListNotesByCategory notes={notes} id={id} />

      <section className="linkAnadirNota">
        <Link to={`/notes/category/${id}/newNote`}> Añadir nota </Link>
      </section>
    </section>
  );
};
