import { useState, useEffect, useRef } from "react";

import { FETCH_CONFIG } from "@/constants/fetch";
import { FormattedData } from "@/types/types";

const { DEBOUNCE_DELAY, INITIAL_SEARCH } = FETCH_CONFIG;

export function useSearchWithDebounce(
  fetchFunction: (searchTerm: string) => Promise<FormattedData>
) {
  const [searchTerm, setSearchTerm] = useState(INITIAL_SEARCH);
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useState(INITIAL_SEARCH);
  const [data, setData] = useState<FormattedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction(debouncedSearchTerm);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchTerm, fetchFunction]);

  return {
    data,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };
}
