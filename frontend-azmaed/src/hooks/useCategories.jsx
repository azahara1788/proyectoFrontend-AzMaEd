import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteCategoryService, getCategoryService } from "../services";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  const deleteCategory = async (id) => {
    try {
      const data = await deleteCategoryService(id, token);
      if (data.status === "error") {
        return setError(data.message);
      }
      setCategories(categories.filter((cat) => cat.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategoryService({ token });
        setCategories(data);
      } catch (error) {
        setError("Error en useCategory", error.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, [token]);

  return {
    categories,
    setCategories,
    error,
    loading,
    deleteCategory,
  };
};

export default useCategories;
