import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const lodaingBoxes = new Array(25).fill(null);;

const loading = () => {
  return (
    <div 
      className="flex flex-wrap gap-4 my-10 mx-auto w-full justify-center px-7 mt-10"
    >
      {lodaingBoxes.map((index) => (
        <Skeleton 
          key={index}
          className='w-[220px] h-[220px] rounded-2xl'
        />
      ))}
    </div>
  )
}

export default loading