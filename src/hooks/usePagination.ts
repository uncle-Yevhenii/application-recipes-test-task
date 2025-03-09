// usePagination.ts
import { useState, useMemo } from "react";

/**
 * Хук для пагінації даних на клієнтській стороні
 */
export function usePagination(data, itemsPerPage = 4) {
  const [currentPage, setCurrentPage] = useState(1);

  // Обчислюємо пагіновані дані
  const paginatedData = useMemo(() => {
    if (!data || !data.meals) return null;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
      ...data,
      meals: data.meals.slice(startIndex, endIndex),
    };
  }, [data, currentPage, itemsPerPage]);

  // Обчислюємо загальну кількість сторінок
  const totalPages = useMemo(() => {
    if (!data || !data.meals) return 0;
    return Math.ceil(data.meals.length / itemsPerPage);
  }, [data, itemsPerPage]);

  // Функції для навігації
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Скидання пагінації до першої сторінки
  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    paginatedData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPage,
    resetPagination,
  };
}
