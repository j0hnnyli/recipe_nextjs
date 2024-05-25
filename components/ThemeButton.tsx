'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex items-center justify-center rounded-lg p-2 hover:bg-zinc-500 hover:text-orange-500'
    >
      {theme === 'dark' ? (
        <SunIcon className='w-5'/>
      ): (
        <MoonIcon className='w-5'/>
      )}
    </button>
  )
}

export default ThemeButton