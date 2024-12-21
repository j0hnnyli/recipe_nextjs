import Card from "@/components/Card";
import { getData } from "@/fetchData";
import SearchBar from "../SearchBar";
import CategoryFilterSelect from '@/components/mediacomponents/CategoryFilterSelect'
import Recipe from "@/types/recipeType";

type Props = {
  params: {
    [key: string]: string;
  };
  searchParams: string;
};

const PastaPage = async ({ params, searchParams }: Props) => {
  const { meals: recipes }: { meals: Recipe[] } = await getData(params.category);

  const searchTerm = searchParams.search ? String(searchParams.search) : ""

  const filteredRecipes = recipes.filter((recipe: Recipe) => {
    if (
      recipe.strMeal
        .toLowerCase()
        .includes(searchTerm)
    ) {
      return recipe;
    }
  });

  return (
    <div className="w-[100vw] md:w-full md:ml-5">
      <div className="flex flex-col md:flex-row items-center justify-between p-2">
        <div className="flex items-center">
          <h1 className="text-3xl tracking-widest mt-2">
            {params.category[0].toUpperCase() + params.category.slice(1)} 
          </h1>
        </div>

        
        <SearchBar category={params.category} />
        <CategoryFilterSelect/>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 my-5 p-2">
        {filteredRecipes.map((recipe: Recipe) => (
          <Card
            recipe={recipe}
            key={recipe.idMeal}
            title={recipe.strMeal}
            imageSrc={recipe.strMealThumb}
            id={recipe.idMeal}
          />
        ))}
      </div>
     
      {filteredRecipes.length === 0 && (
        <div className="mt-10 w-full">
          <p className="text-3xl w-full text-center">
            Sorry! No Recipes Matching that Search!
          </p>
        </div>
      )}
    </div>
  );
};

export default PastaPage;
