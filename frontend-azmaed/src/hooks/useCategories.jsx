import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getCategoryService } from "../services";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategoryService({ token });

        console.log("data de useCategory", data);

        setCategories(data);
      } catch (error) {
        setError("Error en useCategory", error.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, [token]);

  return { categories, error, loading };
};

export default useCategories;
