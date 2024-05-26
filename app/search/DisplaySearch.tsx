import React from 'react'
import { getRecipeByName } from '@/fetchData'
import Recipe from '@/types/recipeType'
import Card from '@/components/Card'

type Props = {
  query: string;
}

const DisplaySearch = async ({query} : Props) => {
  const { meals } = await getRecipeByName(query.toLowerCase());

  return (
    <>
      <h2 className='text-center text-lg my-5'>
        Results: {meals?.length}
      </h2>
      {(query.length === 0 || !meals) ? (
        <div className='text-center mt-10'>
          <h1 className='text-2xl text-red-500'>
            No Recipes Matches for { query.length === 0 ? 'Search' : query }
          </h1>
        </div>
      ) : (
        <div className='flex flex-wrap gap-4 pl-5 md:pl-0 justify-center mb-5'>
          {meals?.map((recipe: Recipe) => (
            <Card 
              key={recipe.idMeal}
              title={recipe.strMeal}
              imageSrc={recipe.strMealThumb}
              id={recipe.idMeal}
            /> 
          ))}
        </div>   
      )}
    </>
  )
}

export default DisplaySearch