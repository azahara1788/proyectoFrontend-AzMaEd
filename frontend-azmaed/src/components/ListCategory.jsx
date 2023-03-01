import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories";

import "./List.css";

export const ListCategory = ({ categories }) => {
  const navigate = useNavigate();
  const { deleteCategory } = useCategories();

  return categories.length ? (
    <ul className="list-categories">
      {categories.map((cat) => {
        return (
          <li key={cat.id}>
            <Link to={`/notes/category/${cat.id}`}> {cat.category}</Link>
            <section className="icons">
              <button
                name="edit"
                onClick={() => {
                  navigate(`/notes/category/edit/${cat.id}`);
                }}
              >
                🖋
              </button>
              <button
                name="delete"
                onClick={() => {
                  if (
                    window.confirm(
                      `¿Quieres borrar la categoría ${cat.category} ?`
                    )
                  )
                    deleteCategory(cat.id);
                }}
              >
                🗑
              </button>
            </section>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay categorías...</p>
  );
};
