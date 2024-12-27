import React from 'react'
import Image from 'next/image'
import Logo from '@/public/recipelogo.jpeg'
import MediaMenuLinks from './MediaMenuLinks'
import ThemeButton from '../ThemeButton'

const MediaMenu = () => {
  return (
    < >
      <div className='flex flex-col justify-center items-center relative'>
        <div className='relative h-20 w-20'>
          <Image 
            fill
            src={Logo}
            alt='logo'
            className='rounded-full'
          />
        </div>
        <h1 className='font-mono text-2xl'>RecipesHub</h1>
      </div>

      <MediaMenuLinks />
      <div className='absolute bottom-5 left-5'>
        <ThemeButton/>
      </div>
    </>
  )
}

export default MediaMenu