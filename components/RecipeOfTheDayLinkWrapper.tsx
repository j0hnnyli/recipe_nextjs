import React, { ReactNode } from 'react'
import { getRecipeOfTheDay } from '@/fetchData'
import Link from 'next/link'

const RecipeOfTheDayLinkWrapper = async ({children} : { children : ReactNode }) => {
  const recipeOfTheDayId = await getRecipeOfTheDay();

  return (
    <Link href={`/recipe/${recipeOfTheDayId}`} className=''>
      {children}
    </Link>
  )
}

export default RecipeOfTheDayLinkWrapper