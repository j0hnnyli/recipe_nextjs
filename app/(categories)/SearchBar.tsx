'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type Props = {
  category: string;
}

const SearchBar = ({ category }: Props) =>  {
  const router = useRouter();
  const [value, setValue] = useState<string>('')
  const [query] = useDebounce(value, 400)

  useEffect(() => {
    if(!query){
      router.push(`/${category}`)
    }else{
      router.push(`/${category}?search=${value.toLowerCase()}`)    
    }
  }, [query, router, value, category])

  return (
    <div className='flex items-center border border-black dark:border-gray-500 rounded-2xl mt-3 md:mt-0 '>
      <div className='w-9 p-1 px-2 rounded-tl-2xl rounded-bl-2xl'>
        <MagnifyingGlassIcon/>
      </div>
      <input type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search . . .'
        className='w-[$350px] py-2 px-4  rounded-tr-2xl rounded-br-2xl outline-none'
      />
    </div>
  )
}

export default SearchBar