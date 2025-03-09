// useSearchWithPagination.ts
import { useEffect } from "react";
import { useSearchWithDebounce } from "./useSearchWithDebounce";
import { usePagination } from "./usePagination";

/**
 * Комбінований хук для пошуку з пагінацією
 */
export function useSearchWithPagination(
  initialSearch = "",
  itemsPerPage = 4,
  debounceDelay = 500
) {
  // Використовуємо хук пошуку
  const { data, loading, error, searchTerm, setSearchTerm } =
    useSearchWithDebounce(initialSearch, debounceDelay);

  // Використовуємо хук пагінації
  const {
    paginatedData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPage,
    resetPagination,
  } = usePagination(data, itemsPerPage);

  // Скидаємо пагінацію при зміні пошукового запиту
  useEffect(() => {
    resetPagination();
  }, [searchTerm]);

  return {
    // Дані
    allData: data,
    data: paginatedData,
    loading,
    error,
    searchTerm,

    // Пагінація
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPage,

    // Функції
    setSearchTerm,
  };
}
