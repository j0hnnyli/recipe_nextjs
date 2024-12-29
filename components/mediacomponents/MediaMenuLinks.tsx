import React from 'react'
import { SheetClose } from "@/components/ui/sheet"
import RecipeOfTheDayLinkWrapper from '../RecipeOfTheDayLinkWrapper'
import Link from 'next/link'

const MediaMenuLinks = () => {

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <Link href='/'>
        <SheetClose 
          className='mb-5'
        >
            Home 
        </SheetClose>
      </Link>

      <Link href='/beef'>
        <SheetClose 
          className='mb-5'
        >
            Categories
        </SheetClose>
      </Link>

      <Link href='/mylist'>
        <SheetClose 
          className='mb-5'
        >
            My Recipes
        </SheetClose>
      </Link>
      
      <RecipeOfTheDayLinkWrapper>
        <SheetClose>
            <p className='text-orange-500 animate-bounce'>Recipe of The Day</p>
        </SheetClose>
      </RecipeOfTheDayLinkWrapper>
    </div>
  )
}

export default MediaMenuLinks