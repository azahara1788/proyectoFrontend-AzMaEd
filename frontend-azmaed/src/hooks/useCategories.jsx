import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteCategoryService, getCategoryService } from "../services";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorCat, setErrorCat] = useState("");
  const { token } = useContext(AuthContext);

  const deleteCategory = async (id) => {
    try {
      await deleteCategoryService(id, token);
    } catch (error) {
      setErrorCat(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategoryService({ token });
        setCategories(data);
        console.log(data);
      } catch (error) {
        setErrorCat("Error en useCategory", error.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, [token]);

  const updateCat = (newCat) => {
    setCategories({ categories, ...newCat });
  };

  return { categories, errorCat, loading, deleteCategory, updateCat };
};

export default useCategories;
