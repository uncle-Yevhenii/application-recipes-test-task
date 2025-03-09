import { Heart } from "lucide-react";
import { Link } from "react-router";

import { Button } from "./ui/button";
import {
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
  Card,
} from "./ui/card";
import { ROUTES_PATH } from "@/constants/route";
import { FormattedMeal } from "@/types/types";

type MealsListProps = {
  list: Array<FormattedMeal>;
};

export function MealsList({ list }: MealsListProps) {
  return (
    <div className="flex-center gap-10 mb-20">
      {list.map((meal) => (
        <Link key={meal.id} to={`${ROUTES_PATH.RECIPE_DETAIL_PAGE}/${meal.id}`}>
          <Card className="hover:shadow-md hover:scale-103 transition duration-600 max-w-[450px]">
            <CardTitle>
              <p className="text-3xl font-semibold text-center h-15">
                {meal.name}
              </p>
            </CardTitle>
            <CardDescription>
              <p className="ml-10 text-md">
                Category: <span className="italic">{meal.category}</span>
              </p>
              <p className="ml-10 text-md">
                Place of origin: <span className="italic"> {meal.origin}</span>
              </p>
            </CardDescription>
            <CardContent>
              <img
                className="w-100 rounded-md"
                src={meal.image}
                alt={meal.name}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled>
                <Heart /> Add to favorite
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
