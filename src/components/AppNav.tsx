import { ROUTES_PATH, ROUTES_NAME } from "@/constants/route";

import { UniversalLink } from "./UniversalNavLink";

const { SELECTED_RECIPES_PAGE_NAME, RECIPES_PAGE_NAME } = ROUTES_NAME;
const { SELECTED_RECIPES_PAGE, RECIPES_PAGE } = ROUTES_PATH;

export function AppNav() {
  return (
    <nav className="flex-center gap-4">
      <UniversalLink
        to={RECIPES_PAGE}
        variant="outline"
        size="lg"
        className="w-70"
      >
        {RECIPES_PAGE_NAME}
      </UniversalLink>

      <UniversalLink
        to={SELECTED_RECIPES_PAGE}
        variant="outline"
        size="lg"
        className="w-70"
      >
        {SELECTED_RECIPES_PAGE_NAME}
      </UniversalLink>
    </nav>
  );
}
