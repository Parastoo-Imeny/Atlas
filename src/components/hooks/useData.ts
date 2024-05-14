import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiClient.get<T[]>(endpoint).then((res) => {
      setData(res.data);
      setLoading(false);
    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    })
  }, []);

  return {data, error, isLoading};
}

export default useData;
