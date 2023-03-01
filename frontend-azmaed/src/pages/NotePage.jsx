import "./NotePage.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { deleteNoteService, getPublicNoteService } from "../services";
import useNote from "../hooks/useNote";


export const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { note, setNote, error, setError } = useNote(id);
  const { user, token } = useContext(AuthContext);

/* Hacer publica una nota */
const publicNote = async (id) => {
  try {
    await getPublicNoteService(id);

    navigate("/note");
  } catch (error) {
    setError(error.message);
  }
};

/* Eliminar una nota */
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
      <button onClick={() => setNote(parseInt(id) - 1)}>Prev</button>
      <button onClick={() => setNote(parseInt(id) + 1)}>Next</button>

      <h3>{note.title}</h3>
      <h4>{note.category}</h4>
      <p>{note.text}</p>
      <p>{note.place}</p>
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
            Borrar nota

          </button>
            <button className="publicNote"
            onClick={()=>{
              if (window.confirm("¿Seguro que quieres cambiar la privacidad de la nota?"))publicNote(id);
            }}>
              Cambiar privacidad
            </button>
          {error ? <p>{error}</p> : null}

        </>
      ) : null}
    </article>
  ) : (
    <p>No hay nota que mostrar</p>
  );
};
