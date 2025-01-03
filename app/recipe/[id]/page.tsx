import { getSingleRecipe } from "@/fetchData"
import ShowMoreOrLess from '../../../components/ShowMoreOrLess'
import RecommendRecipes from '../RecommendRecipes'
import Image from 'next/image'
import AddCartButton from '@/components/AddCartButton'
import BreadCrumb from "@/components/BreadCrumb"  
import VideoComponent from "../VideoComponent"
import Recipe from "@/types/recipeType"
import { Suspense } from "react"

type Props = {
  params : {
    [key: string] : string
  }
}

const RecipePage = async ({ params } : Props) => {
  const { meals } = await getSingleRecipe(params.id)
  const recipe = meals[0];
  const recipeKeys = Object.keys(recipe);

  return (
    <div>
      <BreadCrumb 
        crumbs={[
          {
            href: '/',
            link: 'Home'
          },
          {
            href: '/beef',
            link: 'Categories'
          },
          {
            href: `/${recipe.strCategory}`,
            link: `${recipe.strCategory}`
          },
          {
            link: `${recipe.strMeal}`
          },
        ]}
      />

      <div className=' h-[40vh] relative'>
        <Image src={recipe.strMealThumb} alt={recipe.strMeal}
          fill 
          className='rounded-2xl w-full h-full object-cover'
        />
      </div>

      <div className='mt-10 '>
        <div className=' border rounded-2xl py-2 px-4 bg-blue-500 text-white dark:bg-gray-500 flex flex-col md:flex-row items-center justify-between'>
          <div>
            <h2 className='text-2xl tracking-widest text-center'>{recipe.strMeal}</h2>
            <p className='my-2 tracking-wide md:text-lg '>{recipe.strTags}</p>
          </div>
          <AddCartButton id={params.id} variant='add' recipe={recipe}/>
        </div>
        
        <p className='mt-5'>
          <span className='text-xl text-blue-500 font-bold dark:text-gray-500'>
            Instructions : 
          </span>
          <ShowMoreOrLess paragraph={recipe.strInstructions}/>
        </p>

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between w-full"> 
          <div>
            <h2 className='text-4xl mt-5 tracking-widest text-blue-500 dark:text-gray-500'>
              Ingredients
            </h2>
            <ul className='my-3 pl-4'>
              {recipeKeys.map((key: string) => {
                if (key.includes('strMeasure')) {
                  const measurement = recipe[key];
                  const ingredientKey = key.replace('strMeasure', 'strIngredient');
                  const ingredient = recipe[ingredientKey];
              
                  if (measurement && ingredient) {
                    return (
                      <li key={key} 
                        className='my-1 list-disc'
                      >
                        {measurement} - {ingredient}
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
          
          {recipe.strYoutube.length > 0 && (
            <div className=" md:w-[50%] flex items-center justify-center">
                <VideoComponent
                  url={recipe.strYoutube}
                />
            </div>
          )}
        </div>

      </div>
      
      <Suspense fallback={<div className="h-64 w-full rounded-xl animate-pulse bg-gray-300"></div>}>
        <RecommendRecipes area={recipe.strArea} id={recipe.idMeal}/>
      </Suspense>
    </div>
  )
}

export default RecipePage
