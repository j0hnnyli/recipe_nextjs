import React, { ReactNode } from 'react'

const MyListLayout = ({children} : { children : ReactNode}) => {
  return (
    <div className='mt-20 lg:mt-40 mx-auto w-[80%] max-w-[1800px]'>
      { children }
    </div>
  )
}

export default MyListLayout