import { useParams } from "react-router";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useSearchWithoutDebounce } from "@/hooks/useSearchWithoutDebounce";
import { getMealById } from "@/api/getRecipes";
import { Ingredient } from "@/types/types";

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid meal ID!</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useSearchWithoutDebounce(getMealById, id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  if (!data || !data.meals || !data.meals[0]) return <div>Meal not found!</div>;

  const meal = data.meals[0];

  return (
    <Card className="my-10 p-10">
      <div className="flex-center gap-15 items-start">
        <CardContent>
          <img className="rounded-md" src={meal.image} alt={meal.name} />
        </CardContent>

        <div className="w-[700px]">
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

          <CardContent className="mt-10">
            <p className="text-xl font-semibold">How to cook:</p>
            <ol className="italic list-decimal max-h-50 overflow-auto">
              {meal.instructions.map((i: string, index) => (
                <li key={index}>{i}</li>
              ))}
            </ol>
          </CardContent>

          <CardContent className="mt-10">
            <p className="text-xl font-semibold">Ingredients:</p>
            <ol className="italic list-decimal max-h-30 overflow-auto">
              {meal.ingredients.map((i: Ingredient, index) => (
                <li key={index}>
                  {i.name} - <span>{i.measure}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
