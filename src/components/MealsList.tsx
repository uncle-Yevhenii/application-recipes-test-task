import { Heart } from "lucide-react";

import { Button } from "./ui/button";
import {
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
  Card,
} from "./ui/card";

export function MealsList({ list }) {
  return (
    <div className="flex-center gap-10 mb-20">
      {list.map((meal) => (
        <Card
          key={meal.idMeal}
          className="hover:shadow-md hover:scale-103 transition duration-600 max-w-[450px]"
        >
          <CardTitle>
            <p className="text-3xl font-semibold text-center h-15">
              {meal.strMeal}
            </p>
          </CardTitle>
          <CardDescription>
            <p className="ml-10 text-md">
              Category: <span className="italic">{meal.strCategory}</span>
            </p>
            <p className="ml-10 text-md">
              Place of origin: <span className="italic"> {meal.strArea}</span>
            </p>
          </CardDescription>
          <CardContent>
            <img
              className="w-100 rounded-md"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Heart /> Add to favorite
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
