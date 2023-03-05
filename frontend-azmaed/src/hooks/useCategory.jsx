import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getCategoryService } from "../services";

const useCategory = (id) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategoryService({ token });
        const name = data
          .map((cat) => cat)
          .filter((cat) => cat.id === parseInt(id));

        setCategory(name[0].category);
      } catch (error) {
        setError("Error en useCategory", error.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, [token, id]);

  return { category, setCategory, error, loading };
};

export default useCategory;
