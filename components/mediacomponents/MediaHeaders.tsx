import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import MediaMenu from './MediaMenu'
import MediaHeadersControls from './MediaHeadersControls'

const MediaHeaders = () => {
  return (
    <header
      className='fixed top-0 w-full md:hidden py-3 px-4 flex items-center justify-between bg-gray-200 dark:bg-slate-800 z-50 h-16'
    >
      <Sheet>
        <SheetTrigger>
          <Bars3Icon className='w-8'/>  
        </SheetTrigger> 
        <SheetContent side='left'>
          <MediaMenu/>
        </SheetContent>
      </Sheet>
      
      <MediaHeadersControls/>
    </header>
  )
}

export default MediaHeaders