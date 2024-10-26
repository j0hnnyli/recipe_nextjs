import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer 
      className="bg-gray-200 text-black dark:text-white dark:bg-gray-900 py-4 text-center border-t-2 border-orange-500 dark:border-gray-500 mt-10"
    >
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} RecipeHub. All rights reserved by Johnny Li</p>
        <div className="mt-2 ">
          <Link href="/" className=" hover:text-orange-500 dark:hover:text-gray-500 mx-2 underline">Home</Link>
          <Link href="/beef" className=" hover:text-orange-500 dark:hover:text-gray-500  mx-2 underline">Categories</Link>
          <Link href="/mylist" className=" hover:text-orange-500 dark:hover:text-gray-500  mx-2 underline">My Recipes</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer