import React from 'react';
import { Loader } from 'lucide-react';
import { FiLoader } from "react-icons/fi";



const loading = () => {
  return (
    <div 
      className="flex items-center justify-center h-[80vh] text-9xl"
    >
      <FiLoader className='text-8xl text-orange-500 dark:text-white animate-spin'/>
    </div>
  )
}

export default loading