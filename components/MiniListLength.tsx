'use client'

import {useContext, useEffect, useState} from 'react'
import { cartContext } from '@/context/cartContext'
import Recipe from '@/types/recipeType'

const MiniListLength = () => {
  const {cart} : {cart: Recipe[]} = useContext(cartContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='text-white text-[10px] absolute bg-orange-600 py-1 px-2 rounded-full top-[-10px] right-[-10px]'>
      {mounted && <span className=''>{cart.length}</span> }
    </div>
  )
}

export default MiniListLength