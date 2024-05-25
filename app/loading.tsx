import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
  return (
    <section className="w-[90%] m-auto p-10 max-w-[1500px] mx-auto">
        
        <div className="flex h-[50vh] mt-3 ">
          <Skeleton className="m-2 h-full w-[50%]" />

          <div className="w-[50%] flex flex-col m-2 justify-between h-full gap-4">
            <Skeleton className="h-[50%]" />

            <Skeleton className="h-[50%]"/>
          </div>
        </div>
      </section>
  )
}

export default loading