import Image from "next/image";
import Link from 'next/link'


export default async function Home() {
  return (
    <>
      <section className="m-auto pt-5 md:p-10 max-w-[1800px] ">
        <div className='flex items-center  justify-between px-5 md:px-2'>
          <h2 className="text-xl">Popular</h2>
          <Link href='/beef' 
            className="hover:underline hover:text-blue-500 text-lg"
          >
            All Categories
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:h-[80vh] lg:h-[70vh] mt-3 p-2 lg:p-0">
          <Link href="/pasta"
            className="relative h-[200px] md:h-full m-2 md:w-[50%]"
          >
            <Image src='/pastabg.jpeg' alt='pasta image'
              fill
              className="rounded-2xl hover:border-2 hover:border-blue-500 hover:dark:border-gray-500 hover:p-1 object-cover"
            />
          </Link>
        

          <div className="md:w-[50%] flex flex-col m-2 justify-between h-full gap-4">
            <Link href="/chicken"
              className="relative md:h-[50%] h-[200px]"
            >
              <Image src='/chickenbg.jpeg' alt='pasta image'
                fill
                objectFit="cover"
                className="rounded-2xl hover:border-2 hover:border-blue-500 hover:dark:border-gray-500 hover:p-1"
              />
            </Link>

            <Link href="/beef"
              className="relative md:h-[50%] h-[200px]"
            >
              <Image src='/beefbg.jpeg' alt='pasta image'
                fill
                objectFit="cover"
                className="rounded-2xl hover:border-2 hover:border-blue-500 hover:dark:border-gray-500 hover:p-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
