'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
  category: string;
}

const SearchBar = ({ category }: Props) =>  {
  const router = useRouter();
  const [value, setValue] = useState<string>('')
  const [query] = useDebounce(value, 400)

  useEffect(() => {
    router.push(`/${category}?search=${value.toLowerCase()}`)    
  }, [query, router, value, category])

  return (
    <div className='flex items-center border-b border-b-black dark:border-b-gray-500 mt-3 md:mt-0'>
      <div className='w-9 p-1 px-2'>
        <MagnifyingGlassIcon/>
      </div>
      <input type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search . . .'
        className='py-2 px-4 outline-none border-none bg-gray-200 dark:bg-gray-900 '
      />
    </div>
  )
}

export default SearchBar