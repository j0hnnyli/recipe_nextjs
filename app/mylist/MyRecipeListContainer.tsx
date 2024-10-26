'use client'

import { cartContext } from '@/context/cartContext';
import Recipe from '@/types/recipeType';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const MyRecipeListContainer = () => {
  const {
    cart,
    handleDelete,
  }: { cart: Recipe[]; handleDelete: (id: string) => void } =
    useContext(cartContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 my-5 p-2">
      {(cart && mounted) && cart.map((meal) => (
        <div key={meal.idMeal} className="w-full">
          <div className='relative'>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={300}
              height={200}
              className="rounded-2xl"
            />
            <button 
              onClick={() => handleDelete(meal.idMeal)}
              className='absolute bottom-5 right-5 p-2 rounded-full bg-black'
            >
              <FaTrash className='text-red-500  hover:text-red-800'/>
            </button>
          </div>
          <Link href={`/recipe/${meal.idMeal}`} className='text-center block hover:text-orange-500 hover:underline'>
            {meal.strMeal}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyRecipeListContainer