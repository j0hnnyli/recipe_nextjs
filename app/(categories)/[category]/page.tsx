import Card from "@/components/Card";
import { getData } from "@/fetchData";
import SearchBar from "../SearchBar";
import CategoryFilterSelect from '@/components/mediacomponents/CategoryFilterSelect'
import Recipe from "@/recipeType";

type Props = {
  params: {
    [key: string]: string;
  };
  searchParams: string;
};

const PastaPage = async ({ params, searchParams }: Props) => {
  const { meals: recipes }: { meals: Recipe[] } = await getData(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
  );

  const searchTerm = searchParams.search ? String(searchParams.search) : ""

  const filteredRecipes = recipes.filter((recipe: any) => {
    if (
      recipe.strMeal
        .toLowerCase()
        .includes(searchTerm)
    ) {
      return recipe;
    }
  });

  return (
    <div className="mx-auto ml-5 py-2 px-4 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between pr-[10px] w-[95%] mx-auto">
        <div className="flex items-center">
          <h1 className="text-3xl tracking-widest mt-2">
            {params.category[0].toUpperCase() + params.category.slice(1)} 
          </h1>
        </div>
        <SearchBar category={params.category} />
        <CategoryFilterSelect/>
      </div>
      
      <div className="flex flex-wrap gap-3.5 mb-10 mx-auto justify-center my-5">
        {filteredRecipes.map((recipe: Recipe) => (
          <Card
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
