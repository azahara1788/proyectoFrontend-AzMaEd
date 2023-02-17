import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./NotePage.css";

import useNote from "../hooks/useNote";
import { addImageService, deleteNoteService } from "../services";

export const NotePage = () => {
  const { id } = useParams();
  const { note, error, setError } = useNote(id);
  const { user, token } = useContext(AuthContext);
  const { image } = useState();

  const handleForm = async (e) => {
    e.preventeDefault();
  };

  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });
    } catch (error) {
      setError(error.message);
    }
  };
  const upImage = async () => {
    try {
      await addImageService({ id, token, image });
    } catch (error) {
      setError(error.message);
    }
  };

  return note ? (
    <article className="onenote">
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      {note.nameFile ? (
        <figure className="noteimage">
          <img
            src={`${process.env.REACT_APP_BACKEND}/${note.nameFile}`}
            alt={note.title}
          />
        </figure>
      ) : (
        <form onSubmit={handleForm}>
          <input type="file" id="image" name="nameFile" accept="image" />

          <button
            onClick={() => {
              upImage(note.id, image);
            }}
          >
            Añdir Imagen
          </button>
        </form>
      )}
      {user && note.nameFile ? (
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
