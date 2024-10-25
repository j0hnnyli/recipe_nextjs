import React from 'react'
import { getRecipeByName } from '@/fetchData'
import Recipe from '@/types/recipeType'
import Card from '@/components/Card'

type Props = {
  query: string;
}

const DisplaySearch = async ({query} : Props) => {
  const value = query ? query.toLowerCase() : "";
  const { meals } = await getRecipeByName(value);

  return (
    <>
      {value.length > 0 && (
        <>
          <h2 className='text-center text-lg my-5'>
            Results: {meals?.length}
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 my-5 p-2'>
            {meals?.map((recipe: Recipe) => (
              <Card 
                key={recipe.idMeal}
                title={recipe.strMeal}
                imageSrc={recipe.strMealThumb}
                id={recipe.idMeal}
              /> 
            ))}
          </div>   
        </>
      )}
      
    </>
  )
}

export default DisplaySearch