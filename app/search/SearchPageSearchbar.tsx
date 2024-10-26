'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce';

type Props = {
  defaultvalue : string;

}

const SearchPageSearchbar = ({ defaultvalue} : Props) => {
  const router = useRouter();
  const [value, setValue] = useState<string>('')
  const [ query ] = useDebounce(value, 500)

  useEffect(() => {
    if(!value) return;
    
    router.push(`/search?search=${query.toLowerCase()}`)
  } ,[query, value, router])

  return (
    <input type="text" 
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultvalue}
      placeholder='Search for recipes...'
      className='py-2 px-4 w-full lg:w-[70%] bg-gray-200 dark:bg-gray-900 border-b border-b-orange-500 dark:border-b-gray-200 outline-none mx-auto block text-center'
    />
  )

}

export default SearchPageSearchbar