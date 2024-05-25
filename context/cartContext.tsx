'use client'
import { getSingleRecipe } from "@/fetchData";
import { createContext, ReactNode, useState, useEffect } from "react";

const cartContext = createContext<any>(null)

function CartProvider({children} : {children: ReactNode}){
  const storageCart =typeof window !== 'undefined'&&  JSON.parse(localStorage.getItem("cart") || '[]')
  const [cart, setCart] = useState<any>(storageCart)
  
  async function handleAddCart(id: string) {
    const recipe = await getSingleRecipe(id)

    setCart([recipe.meals[0], ...cart])
  }
  
  function handleDelete(id: string){ 
    const filterCart = cart.filter((item: any) => item.idMeal !== id)

    setCart(filterCart)
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  } , [cart])

  const contextValue = {
    cart, handleAddCart, handleDelete
  }

  return (
    <cartContext.Provider value={contextValue}>
      {children}
    </cartContext.Provider>
  )
}

export {cartContext, CartProvider}
