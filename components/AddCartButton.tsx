'use client'

import { useState, useContext } from 'react'
import { cartContext } from '@/context/cartContext';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Button } from './ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet'
import MiniList from './MiniList';

interface Props {
  id: string;
  variant: string;
}

const AddCartButton = ({ id, variant }: Props) => {
  const { cart, handleAddCart } = useContext(cartContext)
  const [showAdd, setShowAdd] = useState<boolean>(false)
  const [showSheet, setShowSheet] = useState<boolean>(false)
  const [isInCart, setIsInCart] = useState<boolean>(false)

  async function addCart(id: string){
    const alreadyInCart = cart.find((item: any) => item.idMeal === id)

    if(alreadyInCart){
      setIsInCart(true)
      setTimeout(() => { setIsInCart(false) } , 1200)  
      return;
    }
 
    await handleAddCart(id);

    setShowSheet(true)
    setTimeout(() => { setShowSheet(false) } , 1100)  
  }

  return (
    <div className={
      variant === 'quick' ? 'absolute z-60 right-4 bottom-3' : ''}>
      <Sheet open={showSheet}>
        {variant === 'quick' && (
          <Button
            variant='quick'
            size='sm'
            onMouseEnter={() => setShowAdd(true)}
            onMouseLeave={() => setShowAdd(false)}
            onClick={() => addCart(id)}

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
        )}

        {variant === 'add' && (
          <Button variant='add' size='lg'
            onClick={() => addCart(id)}
            className='text-black'
          >            
            {isInCart ? 'Already in List' : 'Add To List'}             
          </Button>
        )}
        
        <SheetContent>
          <MiniList/>
        </SheetContent>

      </Sheet>
    </div>
  )
}

export default AddCartButton;