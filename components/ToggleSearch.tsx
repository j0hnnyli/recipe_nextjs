'use client'

import { useState, useEffect, ReactNode } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';


const ToggleSearch = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [ query ] = useDebounce(value, 500);

  useEffect(() => {
    if(!query) return;
    
    router.push(`/search?search=${value.toLowerCase()}`)
    setShowSearch(false)
    setValue('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, router])

  return (
    <>
      {showSearch ? (   
        <div className='flex items-center'>
          <div className='flex items-center border border-black dark:border-gray-500 rounded-2xl'>
            <div className='w-7 m-2'>
              <MagnifyingGlassIcon/>
            </div>
            <input type="text" 
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className='px-2 py-1 rounded-2xl lg:w-[300px]'
            />
          </div>
          <button
            onClick={() => setShowSearch(false)}
            className="w-7 m-2"
          >
            <XMarkIcon/>
          </button>
        </div>  
      ) :(
        <button 
          onClick={() => setShowSearch(true)}
          className='w-10 flex items-center justify-center rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-orange-500'
        >
          <MagnifyingGlassIcon/>
        </button>
      )}
    </>
  )
}

export default ToggleSearch