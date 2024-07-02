'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode;
  delayTime: number
}

const AnimateReveal = ({ children, delayTime } : Props) => {
  const variants = {
    initial : {scale: 0, opacity: 0},
    animate : {
      scale: 1, opacity: 1,
      transition: { duration: .2, delay : delayTime}
    }
  }

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
    >
      {children}
    </motion.div>
  )
}

export default AnimateReveal