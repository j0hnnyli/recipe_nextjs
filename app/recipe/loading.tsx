import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className='h-screen'>
      <div className='h-[40vh]'>
        <Skeleton 
          className='rounded-2xl w-full h-full'
        />
      </div>

      <div className="mt-8">
        <Skeleton className="h-[8vh] w-full rounded-2xl"/>

        <Skeleton className="h-[6vh] w-full rounded-2xl mt-5"/>
      </div>

    </div>
  )
}

export default loading