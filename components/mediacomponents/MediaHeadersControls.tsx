import React from 'react'
import ToggleSearch from '../ToggleSearch'
import ThemeButton from '../ThemeButton'
import MiniList from '../MiniList'
import { ListBulletIcon } from '@heroicons/react/24/solid'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const MediaHeadersControls = () => {
  return (
    <div className='flex items-center'>
      <ToggleSearch/>

      <Sheet>
        <SheetTrigger >
          <ListBulletIcon className='w-5'/>
        </SheetTrigger>  
        
        <SheetContent>
          <MiniList />                    
        </SheetContent>        
      </Sheet>

      <ThemeButton/>
    </div>
  )
}

export default MediaHeadersControls