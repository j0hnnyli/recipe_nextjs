'use client'
import React from 'react'
import { SheetClose } from "@/components/ui/sheet"
import { useRouter } from 'next/navigation'

const MediaMenuLinks = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
    <SheetClose 
      onClick={() => router.push('/')}
      className='mb-5'
    >
      Home 
    </SheetClose>
    <SheetClose 
      onClick={() => router.push('/beef')}
      className='mb-5'
    >
      Categories
    </SheetClose>

    <SheetClose 
      onClick={() => router.push('/mylist')}
      className='mb-5'
    >
      My Recipes
    </SheetClose>

  </div>
  )
}

export default MediaMenuLinks