export type MealResponse = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string | null;
  dateModified: string | null;
  [key: string]: string | null;
};

export type ApiResponse = {
  meals: MealResponse[];
};

export type Ingredient = {
  name: string;
  measure: string;
};

export type FormattedMeal = {
  id: string;
  name: string;
  category: string;
  origin: string;
  instructions: string[];
  ingredients: Ingredient[];
  image: string;
  tags: string[];
  video: string;
  source: string | null;
};

export type FormattedData = {
  meals: FormattedMeal[];
};
