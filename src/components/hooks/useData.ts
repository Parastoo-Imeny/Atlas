import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // const controller = new AbortController();

    apiClient.get<T>(endpoint).then((res) => {
      setData(res.data);
      setLoading(false);
      console.log(res.data);
    })
    .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
    })

    // return () => controller.abort();
  }, [endpoint]);

  return {data, error, isLoading};
}

export default useData;
