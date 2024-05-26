'use client'
import { Suspense, useContext, useState } from 'react'
import { cartContext } from '@/context/cartContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'


const RecipeList = () => {
  const { cart, handleDelete } = useContext(cartContext)
  const [selected, setSelected] = useState<number | null>(null)
  
  function toggleShowMore(index: number) {
    setSelected(selected === index ? null : index);
  }
  

  return (
    <>
      <h2 className='text-3xl tracking-widest'> 
        My Recipes : {cart.length}
      </h2>
      <div>
        {cart.length === 0 && (
          <div>
            Your List is Currently Empty
          </div>
        )}
        {
          cart && cart.map((recipe: any, index: number) => (
            <div key={recipe.idMeal}
              className='py-4 border border-gray-200 shadow-md my-4 rounded-2xl px-6'
            >
              <div
                className='flex flex-col md:flex-row items-center justify-between'
              >
                <div className='flex justify-center flex-col'>
                  <Image src={recipe.strMealThumb}  alt={recipe.strMeal}
                    width={200}
                    height={200}
                    className='rounded-2xl'
                  />
                  <Button size='lg' variant='danger'
                    onClick={() => handleDelete(recipe.idMeal)}
                    className='my-2'
                  >
                    Delete
                  </Button>
                </div>
                <div className='flex flex-col items-center text-center justify-center'>
                  <Link href={`/recipe/${recipe.idMeal}`} 
                    className='text-xl hover:text-blue-500 hover:underline w-[80%]'
                  >
                    {recipe.strMeal}
                  </Link>

                  <div className='text-lg flex items-center'>
                    <h3 className='mr-2'> 
                      {recipe.strCategory} 
                    </h3>
                    <h3 >{recipe.strArea}</h3>
                  </div>

                  {selected === index && (
                    <div className='my-5'>
                      
                      {cart[selected].strYoutube !== '' && (
                        <iframe
                          src={`https://www.youtube.com/embed/${cart[selected].strYoutube.split('v=')[1]}`}
                          title="YouTube video player"
                          width={400}
                          height={250}
                          allowFullScreen
                          className='mx-auto w-full p-2'
                        ></iframe> 
                      )}
                   

                      <div className='my-4 flex flex-col md:flex-row items-center justify-evenly'>
                        {cart[selected]?.strSource && (
                          <Link href={cart[selected]?.strSource} target='_blank'
                            className='py-2 px-4 border rounded-lg bg-lime-500 text-white dark:bg-teal-500 border-b-4 active:border-b-1 hover:border-b-lime-500 hover:bg-lime-300 hover:dark:bg-gray-500 hover:dark:border-b-teal-500 w-[150px]'
                          >
                            Recipe Source
                          </Link>
                        )}

                        <Link href={`/recipe/${cart[selected]?.idMeal}`}
                          className='py-2 px-4 border rounded-lg bg-teal-500 text-white dark:bg-indigo-500  border-b-4 active:border-b-1 hover:border-b-teal-500 hover:bg-teal-300 hover:dark:bg-gray-500 hover:dark:border-b-indigo-500 w-[150px]'
                        >
                          Recipe Page
                        </Link>
                      </div>
                    </div>                  
                  )}
                </div>

                <button 
                  onClick={() => toggleShowMore(index)}
                  className={`${selected === index && 'rotate-180'} ease-in-out duration-100`}
                >
                  <ChevronDownIcon  className='w-8'/>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default RecipeList