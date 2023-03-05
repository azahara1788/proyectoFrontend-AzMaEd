import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useNotes from "../hooks/useNotes";
import { ListNotes } from "../components/ListNotes";

import "../App.css";

export const NoteAllPage = () => {
  const { user } = useContext(AuthContext);

  const { notes, errorNotes, loadingNotes } = useNotes();

  if (!user || loadingNotes) return <p>Cargando...</p>;

  if (errorNotes) return <p>Error</p>;

  return (
    <section className="noteAllPage">
      <section className="note">
        <h3>Mis notas</h3>
        <ListNotes notes={notes} />
      </section>
    </section>
  );
};
