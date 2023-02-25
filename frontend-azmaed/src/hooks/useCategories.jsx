import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteCategoryService, getCategoryService } from "../services";
import { useNavigate } from "react-router-dom";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteCategory = async (id) => {
    try {
      await deleteCategoryService(id, token);

      navigate("/note");
    } catch (error) {
      setError(error.message);
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

  return { categories, error, loading, deleteCategory };
};

export default useCategories;
