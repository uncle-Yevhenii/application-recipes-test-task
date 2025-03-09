import { FormattedData } from "@/types/types";
import { useState, useEffect } from "react";

export function useSearchWithoutDebounce(
  fetchFunction: (id: string) => Promise<FormattedData | null>,
  id: string
) {
  const [data, setData] = useState<FormattedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction(id);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, id]);

  return {
    data,
    loading,
    error,
  };
}
