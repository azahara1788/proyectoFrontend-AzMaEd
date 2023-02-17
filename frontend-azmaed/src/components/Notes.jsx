import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useCategory from "../hooks/useCategories";
import { ListCategory } from "./ListCategory";

export const Notes = () => {
  const { user } = useContext(AuthContext);
  const { categories, error, loading } = useCategory();

  if (!user || loading) return <p>Cargando...</p>;
  if (error) return <p>Erorr</p>;

  return (
    <section>
      <h1>Bienvendio, {user.name}</h1>

      <p>Aquí están tus categorías</p>
      <ListCategory categories={categories} />
    </section>
  );
};
