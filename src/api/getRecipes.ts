import { httpClient } from "./httpClient";

/**
 * Функція для пошуку страв за назвою
 * @param search - Пошуковий запит
 * @returns Promise з даними відповіді
 */
export const getRecipes = async (search = "") => {
  const response = await httpClient.get(`/search.php?s=${search}`);
  return response.data;
};

/**
 * Функція для отримання детальної інформації про страву за ID
 * @param id - ID страви
 * @returns Promise з даними відповіді
 */
export const getMealById = async (id) => {
  if (!id) return null;
  const response = await httpClient.get(`/lookup.php?i=${id}`);
  return response.data;
};

// Тут можна додати інші API функції
