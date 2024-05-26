import { ListBulletIcon} from '@heroicons/react/24/solid';
import ThemeButton from './ThemeButton'
import Logo from '../public/recipelogo.jpeg'
import Link from 'next/link'
import Image from 'next/image';
import ToggleSearch from './ToggleSearch';
import MiniList from './MiniList';
import { 
  Sheet, 
  SheetTrigger,
  SheetContent,
} from './ui/sheet';

const Headers = () => {
  return (
    <header className='hidden lg:inline fixed w-full top-0 z-30 bg-white dark:bg-slate-800'>
      <div className='flex items-center justify-between p-4  max-w-[1800px] mx-auto relative'>
        <div className='flex items-center justify-between w-[55%]'>
          <div>
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

          <div className='flex flex-col justify-center items-center '>
            <div className='relative h-20 w-20'>
              <Image 
                fill
                src={Logo}
                alt='logo'
              />
            </div>
            <h1 className='font-mono text-2xl'>RecipesHub</h1>
          </div>
        </div>

        <div className='flex items-center absolute right-0'>        
          <ToggleSearch/>

          <ThemeButton/>
          
          <Sheet>
            <SheetTrigger 
              className='w-10 flex items-center justify-center rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-orange-500 mr-2'
            >
              <ListBulletIcon className='w-10'/>
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