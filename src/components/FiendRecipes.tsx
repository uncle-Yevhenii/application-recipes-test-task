import { Input } from "./ui/input";

type FiendRecipesProps = React.ComponentProps<typeof Input>;

export function FiendRecipes({ ...props }: FiendRecipesProps) {
  return (
    <div className="my-10 max-w-5xl m-auto">
      <Input {...props} />
    </div>
  );
}
