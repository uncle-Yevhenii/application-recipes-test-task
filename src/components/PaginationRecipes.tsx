import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { Button } from "./ui/button";

type PaginationRecipesProps = {
  totalPages: number;
  currentPage: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
};

export function PaginationRecipes({
  totalPages,
  goToPrevPage,
  currentPage,
  goToNextPage,
  goToPage,
}: PaginationRecipesProps) {
  return (
    <div className="m-auto">
      {totalPages > 1 && (
        <div className="flex-center gap-1">
          <Button
            className="mr-5"
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            <ArrowLeftCircle /> Prev page
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => goToPage(page)}
              variant={currentPage === page ? "outline" : "default"}
            >
              {page}
            </Button>
          ))}

          <Button
            className="ml-5"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next page <ArrowRightCircle />
          </Button>
        </div>
      )}
    </div>
  );
}
