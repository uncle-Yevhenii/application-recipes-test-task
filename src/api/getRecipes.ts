import { ApiResponse, FormattedData } from "@/types/types";

import { httpClient } from "./httpClient";
import { formatRecipeData } from "@/lib/formatRecipeData";

export const getRecipes = async (search = ""): Promise<FormattedData> => {
  const response = await httpClient.get(`/search.php?s=${search}`);

  const data: ApiResponse = response.data;

  const formattedData: FormattedData = formatRecipeData(data);
  return formattedData;
};

export const getMealById = async (
  id: string
): Promise<FormattedData | null> => {
  if (!id) return null;

  const response = await httpClient.get(`/lookup.php?i=${id}`);
  const data: ApiResponse = response.data;

  const formattedData: FormattedData = formatRecipeData(data);
  return formattedData;
};
