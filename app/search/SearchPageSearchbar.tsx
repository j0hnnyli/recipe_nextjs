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
    
    router.push(`/search?search=${value.toLowerCase()}`)
  } ,[query, value, router])

  return (
    <input type="text" 
      onChange={(e) => setValue(e.target.value)}
      defaultValue={defaultvalue}
      className='rounded-2xl py-2 px-4 mx-2 w-full lg:w-[50%] border-black border dark:border-gray-500'
      placeholder='Search for recipes...'
    />
  )

}

export default SearchPageSearchbar