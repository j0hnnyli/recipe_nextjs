import React from 'react'
import { FiLoader } from 'react-icons/fi'

const MyListLoading = () => {
  return (
    <section className="w-full m-auto p-10 max-w-[1500px] mx-auto h-[80vh] flex items-center justify-center">
      <FiLoader className='text-8xl text-orange-500 dark:text-white animate-spin'/>
    </section>
  )
}

export default MyListLoading