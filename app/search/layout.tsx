import React, { ReactNode } from 'react'

const SearchPageLayout= ({children} : {children: ReactNode}) => {
  return (
    <div className='mt-20 lg:mt-40 px-4 lg:px-0  lg:w-[90%] mx-auto max-w-[1800px]'>
      {children}
    </div>
  )
}

export default SearchPageLayout
