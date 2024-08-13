import React from 'react'
import { FiLoader } from "react-icons/fi";

const loading = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <FiLoader className='text-orange-500 dark:text-white animate-spin text-8xl'/>
    </div>
  )
}

export default loading