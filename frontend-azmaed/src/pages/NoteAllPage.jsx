import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useNotes from "../hooks/useNotes";
import { ListNotes } from "../components/ListNotes";
import "./NotesUserPage.css";

import "../App.css";

export const NoteAllPage = () => {
  const { user } = useContext(AuthContext);

  const { notes, errorNotes, loadingNotes } = useNotes();

  if (!user || loadingNotes) return <p>Cargando...</p>;

  if (errorNotes) return <p>Error</p>;

  return (
    <section className="noteAllPage">
      <h2>Bienvenid@, {user.name}</h2>
      <section className="note">
        <h3>Todas tus notas</h3>
        <ListNotes notes={notes} />
      </section>
    </section>
  );
};
