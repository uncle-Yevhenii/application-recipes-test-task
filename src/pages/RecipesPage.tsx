import { useSearchWithPagination } from "@/hooks/useSearchWithPagination";
import { PaginationRecipes } from "@/components/PaginationRecipes";
import { FiendRecipes } from "@/components/FiendRecipes";
import { MealsList } from "@/components/mealsList";

const RecipeSearch = () => {
  const {
    data,
    loading,
    error,
    searchTerm,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPage,
    setSearchTerm,
  } = useSearchWithPagination();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <FiendRecipes
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Fiend recipes..."
      />

      {loading && <div>Завантаження...</div>}

      {error && <div>Помилка: {error.message}</div>}

      {data && data.meals && (
        <div>
          <MealsList list={data.meals} />

          <PaginationRecipes
            totalPages={totalPages}
            goToPrevPage={goToPrevPage}
            currentPage={currentPage}
            goToNextPage={goToNextPage}
            goToPage={goToPage}
          />
        </div>
      )}

      {data && !data.meals && <div>Рецепти не знайдено</div>}
    </div>
  );
};

export default RecipeSearch;
