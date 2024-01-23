import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch(`http://localhost:4000/recipes`);
  return response.json();
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="">
            <CardHeader>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{recipe.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <button className="m-4">View Recipe</button>
              <p>{recipe.vegan ? "Vegan" : "Not Vegan!"}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
