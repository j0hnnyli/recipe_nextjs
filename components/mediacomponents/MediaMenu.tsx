import React from 'react'
import Image from 'next/image'
import Logo from '@/public/recipelogo.jpeg'
import MediaMenuLinks from './MediaMenuLinks'

const MediaMenu = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='relative h-20 w-20'>
          <Image 
            fill
            src={Logo}
            alt='logo'
          />
        </div>
        <h1 className='font-mono text-2xl'>RecipesHub</h1>
      </div>

      <MediaMenuLinks />
    </>
  )
}

export default MediaMenu