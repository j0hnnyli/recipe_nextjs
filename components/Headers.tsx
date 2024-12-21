import { GiCookingPot } from "react-icons/gi";
import ThemeButton from './ThemeButton'
import Logo from '../public/recipelogo.jpeg'
import Link from 'next/link'
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import MiniList from './MiniList';
import { 
  Sheet, 
  SheetTrigger,
  SheetContent,
} from './ui/sheet';
import MiniListLength from "./MiniListLength";

const Headers = () => {
  return (
    <header className='hidden md:inline fixed w-full top-0 z-50 bg-gray-200 dark:bg-gray-900 h-36'>
      <div className='flex items-center justify-between p-4  max-w-[1800px] mx-auto relative'>
        <div className='flex'>
          <Link href='/' 
            className='rounded-lg p-2 hover:bg-zinc-500 hover:text-orange-500' 
          >
            Home
          </Link>
          <Link href='/beef' 
            className='rounded-lg p-2 hover:bg-zinc-500 hover:text-orange-500'
          >
            Categories
          </Link>
        </div>

        <div className='flex flex-col justify-center items-center w-full'>
          <div className='relative h-20 w-20'>
            <Image 
              fill
              src={Logo}
              alt='logo'
              className="rounded-full"
            />
          </div>
          <h1 className='font-mono text-2xl'>RecipesHub</h1>
        </div>

        <div className='flex items-center'>        
          <Link href="/search"
            className="hover:bg-zinc-500 hover:text-orange-500 mr-2 p-2 rounded-lg border-none"
          >
            <MagnifyingGlassIcon className='w-5'/>
          </Link>

          <ThemeButton/>
          
          <Sheet>
            <SheetTrigger 
              className='w-10 flex items-center justify-center rounded-lg p-2 hover:bg-zinc-500 hover:text-orange-500 mr-2'
            > 
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
      </div>
    </header>
  )
}

export default Headers