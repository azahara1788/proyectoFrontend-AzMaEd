import { useEffect, useState } from "react";
import { getMyDataService } from "../services/index";

const useUser = (id) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorUser, setErrorUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getMyDataService(id);

        setUser(data);
      } catch (error) {
        setErrorUser(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  return { user, errorUser, loading };
};

export default useUser;
