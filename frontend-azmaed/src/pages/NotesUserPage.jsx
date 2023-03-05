import "./NotesUserPage.css";
import "../components/List.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Modal } from "../components/Modal";
import { ListCategory } from "../components/ListCategory";
import { NewCategory } from "../components/NewCategory";
import useCategories from "../hooks/useCategories";
import { Loading } from "../components/Loading";

export const NotesUserPage = () => {
  const { user } = useContext(AuthContext);
  const { categories, setCategories, deleteCategory, error, loading } =
    useCategories();

  if (!user || loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <section className="userpage">
      <h2>¡Hola {user.name}!</h2>

      <section className="categorias">
        <h3>Categorías:</h3>
        <Modal label="+ Categoría">
          <NewCategory
            categories={categories}
            setCategories={setCategories}
            loading={loading}
          />
        </Modal>

        <ListCategory
          categories={categories}
          deleteCategory={deleteCategory}
          error={error}
        />
      </section>
    </section>
  );
};
