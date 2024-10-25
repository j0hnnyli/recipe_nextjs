import React, { ReactNode } from 'react'

const RecipePageLayout = ({children} : { children: ReactNode}) => {
  return (
    <div className='mt-20 lg:mt-40 w-[85%] lg:w-[70%] mx-auto max-w-[1800px]'>
      {children}
    </div>
  )
}

export default RecipePageLayout