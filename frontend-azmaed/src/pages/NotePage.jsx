import "./NotePage.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService } from "../services";
import useNote from "../hooks/useNote";

export const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { note, error, setError } = useNote(id);
  const { user, token } = useContext(AuthContext);

  const deleteNote = async (id) => {
    try {
      await deleteNoteService(id, { token });

      navigate("/note");
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
      ) : null}

      {user && note ? (
        <>
          <button
            name="edit"
            onClick={() => {
              navigate(`/note/edit/${id}`);
            }}
          >
            🖋
          </button>
          <button
            className="button-nota"
            onClick={() => {
              if (window.confirm("¿Quieres borrar la nota?")) deleteNote(id);
            }}
          >
            🗑
          </button>
          {error ? <p>{error}</p> : null}
        </>
      ) : null}
    </article>
  ) : (
    <p>No hay nota que mostrar</p>
  );
};
