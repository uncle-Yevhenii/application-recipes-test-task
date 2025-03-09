import { Routes, Route, Outlet } from "react-router";

import { ROUTES_PATH } from "@/constants/route";

import SelectedRecipesPage from "@/pages/SelectedRecipesPage";
import RecipeDetailPage from "@/pages/RecipeDetailPage";
import LayoutWrapper from "@/pages/LayoutWrapper";
import NotFoundPage from "@/pages/NotFoundPage";
import RecipesPage from "@/pages/RecipesPage";

const {
  SELECTED_RECIPES_PAGE,
  RECIPE_DETAIL_PAGE,
  NOT_FOUND_PAGE,
  RECIPES_PAGE,
} = ROUTES_PATH;

export function App() {
  return (
    <Routes>
      <Route
        path={RECIPES_PAGE}
        element={
          <LayoutWrapper>
            <Outlet />
          </LayoutWrapper>
        }
      >
        <Route index element={<RecipesPage />} />
        <Route path={RECIPE_DETAIL_PAGE} element={<RecipeDetailPage />} />
        <Route path={SELECTED_RECIPES_PAGE} element={<SelectedRecipesPage />} />

        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
