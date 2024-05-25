import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loadingBoxes = Array(25).fill(null)

const loading = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-4 my-5'>
      {loadingBoxes.map((index) => (
        <Skeleton 
          key={index}
          className='w-[220px] h-[220px] rounded-2xl'
        />
      ))}
    </div>
  )
}

export default loading