import { FormattedData, ApiResponse, MealResponse } from "@/types/types";

export function formatRecipeData(apiResponse: ApiResponse): FormattedData {
  const meals = apiResponse.meals.map((meal) => {
    const ingredientIndices = Array.from(
      { length: 20 },
      (_, index) => index + 1
    );

    const ingredients = ingredientIndices
      .map((i) => {
        const ingredientKey = `strIngredient${i}` as keyof MealResponse;
        const measureKey = `strMeasure${i}` as keyof MealResponse;

        const ingredient = meal[ingredientKey] as string | null;
        const measure = meal[measureKey] as string | null;

        return {
          name: ingredient || "",
          measure: measure ? measure.trim() : "",
        };
      })
      .filter((item) => item.name && item.name.trim() !== "");

    const instructionsSteps = meal.strInstructions
      .split(/\r\n|\n|\r/)
      .filter((step) => step.trim() !== "");

    return {
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      origin: meal.strArea,
      instructions: instructionsSteps,
      ingredients,
      image: meal.strMealThumb,
      tags: meal.strTags ? meal.strTags.split(",") : [],
      video: meal.strYoutube,
      source: meal.strSource,
    };
  });

  return {
    meals,
  };
}
