'use client'

import { useContext } from 'react'
import { cartContext } from '@/context/cartContext'
import Image from 'next/image'
import { Button } from './ui/button'
import { SheetClose } from '@/components/ui/sheet'
import Recipe from '@/types/recipeType'
import Link from 'next/link'

const MiniList = () => {
  const { cart, handleDelete } = useContext(cartContext);


  return (
    <>
      <div className='flex items-center justify-center flex-col my-5'>
        <h2 className='text-center text-xl'>
          My Recipe List: {cart.length}
        </h2>
        <Link href="/mylist">
          <SheetClose
            className='py-2 px-4 text-white inline hover:underline hover:text-orange-500'
          >
            View All
          </SheetClose>
        </Link>
        <div className='h-1 w-[80%] mx-auto bg-orange-500 rounded-xl'></div>
      </div>

      <div className='overflow-auto h-[90%]'>
        { cart && cart.map((recipe: Recipe) => (
          <div key={recipe.idMeal} 
            className='flex flex-col lg:flex-row items-center justify-center w-full my-5 p-2'
          >
            <Image src={recipe.strMealThumb} alt={recipe.strMeal}
              width={300}
              height={300}
              className='md:w-[50%] rounded-full'
            />

            <div className='lg:w-[50%] text-center flex flex-col items-center '> 
              <Link href={`/recipe/${recipe.idMeal}`}>
                <SheetClose
                  className='text-lg hover:text-orange-500 hover:underline '
                >
                  {recipe.strMeal}
                </SheetClose>             
              </Link>
                    
              <Button size='lg' variant='danger'
                onClick={() => handleDelete(recipe.idMeal)}
                className='my-2'
              >
                Delete
              </Button>
              
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MiniList