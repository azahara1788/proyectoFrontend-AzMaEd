import { Link } from "react-router-dom";

import "./List.css";

export const ListNotesByCategory = ({ notes, id }) => {
  const noteCategory = notes
    .map((note) => note)
    .filter((note) => note.category_id === parseInt(id));

  return noteCategory.length ? (
    <ul className="list-categories">
      {noteCategory.map((note) => {
        return (
          <li key={note.id} category={note.category_id}>
            <Link to={`/note/${note.id}`}> {note.title}</Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay notas...</p>
  );
};
