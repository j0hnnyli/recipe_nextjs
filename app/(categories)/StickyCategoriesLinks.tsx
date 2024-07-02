'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'

type Props = {
  href : string;
  title: string;
}

const StickyCategoriesLinks = ({ title, href }: Props) => {
  const pathname = usePathname();
  const sliced = pathname.slice(1).toLowerCase()
  const selected = sliced.toLowerCase() === href.toLowerCase();

  
  return (
    <li className={`mb-2 ${selected && 'dark:bg-gray-500 bg-orange-500 text-white'} rounded-2xl`}>
      <Link 
        href={href} 
        className='w-full p-2 rounded-xl flex iems-center justify-between hover:bg-blue-200 hover:dark:bg-gray-700'
      >
        <div>{title}</div>
        
        {
          selected ? (
          <div className='w-5'>
            <ChevronDoubleRightIcon/>
          </div>
          ) : <div/>
        }

      </Link>
    </li>
  )
}

export default StickyCategoriesLinks