'use client'

import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const ScrollTopButton = () => {
  const [show, setShow] = useState<boolean>(false);

  function scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function handleScroll(){
    setShow(window.scrollY > 150)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {show ? (
        <button 
          onClick={scrollTop}
          className='rounded-full bg-black text-white dark:bg-gray-500 hover:bg-slate-700 hover:dark:bg-gray-900  bottom-7 right-7 flex flex-col items-center justify-center py-2 px-3 fixed'
        >
          <ArrowUpIcon className='w-5 h-5 text-white'/>
          <p className='text-sm'> Top </p>        
        </button>
      ) : null}
    </>
  )
}

export default ScrollTopButton