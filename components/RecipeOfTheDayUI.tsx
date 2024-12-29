'use client'

import { motion } from 'framer-motion'

const RecipeOfTheDayUI = () => {

  return (
    <div className='absolute bottom-5 left-5 md:flex items-center justify-center p-2 hidden'>
      <div className='absolute z-10  text-orange-500 dark:text-gray-500'>
        <p className='flex flex-col justify-center items-center text-sm animate-bounce'>
          <span>Recipe of</span>
          <span>The Day</span>
        </p>
      </div>

      <div 
        className='z-20'
      >
        <motion.svg 
          width="150" 
          height="150" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{rotate: 0}}
          animate={{rotate: 360}}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <circle cx="75" cy="75" r="50" stroke="transparent" strokeWidth="1" fill="transparent" />

          
          <path id="circlePath" d="M 75,25 A 50,50 0 1,1 74.9,25" fill="transparent" />

         
          <text fill="white" fontSize="16" >
            <textPath href="#circlePath" startOffset="0%" textAnchor="start">
              Click Me -
            </textPath>
            <textPath href="#circlePath" startOffset="25%" textAnchor="start">
              Click Me -
            </textPath>
            <textPath href="#circlePath" startOffset="50%" textAnchor="start">
              Click Me -
            </textPath>
            <textPath href="#circlePath" startOffset="75%" textAnchor="start">
              Click Me -
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}

export default RecipeOfTheDayUI