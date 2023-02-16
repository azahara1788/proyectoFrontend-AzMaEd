import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
//import { useEffect } from "react";
import useNote from "../hooks/useNote";
import { deleteNoteService } from "../services";

export const NotePage = () => {
  const { id } = useParams();
  const { note } = useNote(id);
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });
    } catch (error) {
      setError(error.message);
    }
  };

  return note ? (
    <article className="note">
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      {note.nameFile ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/${note.nameFile}`}
          alt={note.title}
        />
      ) : null}
      {user ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("¿Quieres borrar la nota?"))
                deleteNote(note.id);
            }}
          >
            Borrar nota
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  ) : (
    <p>No hay nota que mostrar</p>
  );
};
