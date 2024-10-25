import React from 'react';
import { FiLoader } from "react-icons/fi";



const loading = () => {
  return (
    <div 
      className="flex items-center justify-center h-screen text-9xl w-screen"
    >
      <FiLoader className='text-8xl text-orange-500 dark:text-white animate-spin'/>
    </div>
  )
}

export default loading