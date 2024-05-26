'use client'

import { useState, useContext, MouseEvent } from 'react'
import { cartContext } from '@/context/cartContext';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import MiniList from './MiniList';

interface Props {
  id: string;
  variant: string;
}

const AddCartButton = ({ id, variant }: Props) => {
  const { cart, handleAddCart } = useContext(cartContext);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);

  async function addCart(id: string, e : MouseEvent<HTMLButtonElement>){
    const alreadyInCart = cart.find((item: any) => item.idMeal === id)

    if(alreadyInCart){
      e.preventDefault()
  
      setIsInCart(true)
      setTimeout(() => { setIsInCart(false) } , 1200)  
      return;
    }
 
    await handleAddCart(id);
  }

  return (
    <div className={
      variant === 'quick' ? 'absolute z-60 right-4 bottom-3' : ''}>
      <Sheet >
        {variant === 'quick' && (
          <SheetTrigger>
            <Button
              variant='quick'
              size='sm'
              onMouseEnter={() => setShowAdd(true)}
              onMouseLeave={() => setShowAdd(false)}
              onClick={(e) => addCart(id, e)}

              className={`rounded-full ${showAdd && 'w-full'}`}
            >   
                {
                  showAdd ? 
                  <p className='text-md'>
                    {isInCart ? 'Already in List' : 'QuickAdd'}
                  </p>: 
                  <PlusIcon />
                }
            </Button>      
          </SheetTrigger>
        )}

        {variant === 'add' && (
          <SheetTrigger>
            <Button variant='add' size='lg'
              onClick={(e) => addCart(id, e)}
              className='text-black'
            >     
                {isInCart ? 'Already in List' : 'Add To List'}             
            </Button>
          </SheetTrigger>       
        )}
        
        <SheetContent>
          <MiniList/>
        </SheetContent>

      </Sheet>
    </div>
  )
}

export default AddCartButton;