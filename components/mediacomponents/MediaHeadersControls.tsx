import MiniList from '../MiniList'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiCookingPot } from 'react-icons/gi'
import MiniListLength from '../MiniListLength'

const MediaHeadersControls = () => {
  return (
    <div className='flex '>
      <Link href="/search"
        className="hover:bg-zinc-500 hover:text-orange-500 mr-2 p-2 rounded-lg border-none"
      >
        <FaMagnifyingGlass className='text-md'/>
      </Link>
      
      <Sheet>
        <SheetTrigger >
        <div className="relative">
          <GiCookingPot className='text-2xl'/>
          <MiniListLength/>
        </div>
        </SheetTrigger>  
        
        <SheetContent>
          <MiniList />                    
        </SheetContent>        
      </Sheet>
    </div>
  )
}

export default MediaHeadersControls