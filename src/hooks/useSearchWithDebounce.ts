import { useState, useEffect, useRef } from "react";
import { getRecipes } from "@/api/getRecipes";

export function useSearchWithDebounce(initialSearch = "", debounceDelay = 500) {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialSearch);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isInitialMount = useRef(true);

  // Ефект для debounce пошукового запиту
  useEffect(() => {
    // При першому рендері не встановлюємо таймер
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Встановлюємо таймер для debounce
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, debounceDelay);

    // Очищуємо таймер при оновленні searchTerm
    return () => clearTimeout(timerId);
  }, [searchTerm, debounceDelay]);

  // Ефект для виконання пошукового запиту
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getRecipes(debouncedSearchTerm);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return {
    data,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };
}
