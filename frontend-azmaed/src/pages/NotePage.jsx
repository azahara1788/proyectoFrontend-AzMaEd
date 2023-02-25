import "./NotePage.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService } from "../services";
import useNote from "../hooks/useNote";

export const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { note, setNote, error, setError } = useNote(id);
  const { user, token } = useContext(AuthContext);

  const deleteNote = async (id) => {
    try {
      await deleteNoteService(id, { token });

      navigate("/note");
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    // Defino function async para poder usar await
    const getNotes = async () => {
      //console.log(data.results);
      // Guardo los datos del personaje en char con setChar
      setNote(id);
      // IMPORTANTE: no tengo el personaje actual aqui!
      //console.log(char);
    };

    // Llamo la función
    getNotes();
  }, [setNote, id]);
  console.log(id);
  return note ? (
    <article className="onenote">
      <button onClick={() => setNote(parseInt(id) - 1)}>Prev</button>
      <button onClick={() => setNote(parseInt(id) + 1)}>Next</button>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      {note.nameFile ? (
        <figure className="noteimage">
          <img
            src={`${process.env.REACT_APP_BACKEND}/${note.nameFile}`}
            alt={note.title}
          />
        </figure>
      ) : null}

      {user && note ? (
        <>
          <button
            className="button-nota"
            onClick={() => {
              if (window.confirm("¿Quieres borrar la nota?")) deleteNote(id);
            }}
          >
            Borrar nota
          </button>
          {error ? <p>{error}</p> : null}
        </>
      ) : null}
    </article>
  ) : (
    <p>No hay nota que mostrar</p>
  );
};
