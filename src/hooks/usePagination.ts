import { useState, useMemo } from "react";

import { FETCH_CONFIG } from "@/constants/fetch";
import { FormattedData } from "@/types/types";

const { ITEMS_PER_PAGE } = FETCH_CONFIG;

export function usePagination(data: FormattedData) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    if (!data || !data.meals) return null;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return {
      ...data,
      meals: data.meals.slice(startIndex, endIndex),
    };
  }, [data, currentPage]);

  const totalPages = useMemo(() => {
    if (!data || !data.meals) return 0;
    return Math.ceil(data.meals.length / ITEMS_PER_PAGE);
  }, [data]);

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

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
