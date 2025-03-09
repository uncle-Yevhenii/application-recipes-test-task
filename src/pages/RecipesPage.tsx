import { useEffect } from "react";

import { useSearchWithDebounce } from "@/hooks/useSearchWithDebounce";
import { PaginationRecipes } from "@/components/PaginationRecipes";
import { FiendRecipes } from "@/components/FiendRecipes";
import { usePagination } from "@/hooks/usePagination";
import { MealsList } from "@/components/MealsList";
import { getRecipes } from "@/api/getRecipes";

export default function RecipesPage() {
  const { data, loading, searchTerm, setSearchTerm } =
    useSearchWithDebounce(getRecipes);

  const {
    paginatedData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPage,
    resetPagination,
  } = usePagination(data || { meals: [] });

  useEffect(() => {
    resetPagination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <div>
      <FiendRecipes
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Fiend recipes..."
      />

      {loading && <div>Loading...</div>}

      {paginatedData && paginatedData.meals && (
        <div>
          <MealsList list={paginatedData.meals} />

          <PaginationRecipes
            totalPages={totalPages}
            goToPrevPage={goToPrevPage}
            currentPage={currentPage}
            goToNextPage={goToNextPage}
            goToPage={goToPage}
          />
        </div>
      )}

      {paginatedData && !paginatedData.meals && <div>Not found recipes</div>}
    </div>
  );
}
