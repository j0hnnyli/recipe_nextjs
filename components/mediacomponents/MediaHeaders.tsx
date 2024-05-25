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
      className='fixed top-0 w-full lg:hidden p-2 flex items-center justify-between bg-white dark:bg-slate-800 z-50'
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