'use client'

import { useContext } from 'react'
import { cartContext } from '@/context/cartContext'
import Image from 'next/image'
import { Button } from './ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { useRouter } from 'next/navigation'

const MiniList = () => {
  const { cart, handleDelete } = useContext(cartContext);
  const router = useRouter();


  return (
    <>
      <div className='flex items-center justify-center flex-col my-5'>
        <h2 className='text-center text-xl'>
          Recipe List: {cart.length}
        </h2>
        <SheetClose 
          onClick={() => router.push('/mylist')}
          className='border py-2 px-4 bg-blue-500 text-white dark:bg-gray-500 hover:bg-gray-500 hover:dark:bg-white hover:dark:text-gray-500 rounded-2xl hidden lg:inline'
        >
          Go to List Page 
        </SheetClose>
      </div>

      <div className='overflow-auto h-[90%]'>
        { cart && cart.map((recipe: any) => (
          <div key={recipe.idMeal} 
            className='flex flex-col lg:flex-row items-center justify-center w-full my-5 p-2'
          >
            <Image src={recipe.strMealThumb} alt={recipe.strMeal}
              width={300}
              height={300}
              className='md:w-[50%] rounded-full'
            />

            <div className='lg:w-[50%] text-center flex flex-col items-center '> 
              <SheetClose
                onClick={() => router.push(`/recipe/${recipe.idMeal}`)}
                className='text-lg hover:text-blue-500 hover:underline dark:hover:text-gray-500 '
              >
                {recipe.strMeal}
              </SheetClose>             
                    
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