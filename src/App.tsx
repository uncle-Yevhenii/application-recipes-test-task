import { Routes, Route } from "react-router";

import SelectedRecipesPage from "@/pages/SelectedRecipesPage";
import RecipeDetailPage from "@/pages/RecipeDetailPage";
import LayoutWrapper from "@/pages/LayoutWrapper";
import NotFoundPage from "@/pages/NotFoundPage";
import RecipesPage from "@/pages/RecipesPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWrapper />}>
        <Route index element={<RecipesPage />} />
        <Route path=":id" element={<RecipeDetailPage />} />
        <Route path="/selected" element={<SelectedRecipesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
