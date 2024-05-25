'use client'
import { useState } from 'react'

type Props = {
  paragraph : string
}

const ShowMoreOrLess = ({ paragraph }: Props) => {
  const [show, setShow] = useState<boolean>(false)

  const slicedParagraph = paragraph.length < 350 ? paragraph : paragraph.slice(0, 350) + ' . . . ';

  return (
    <span className='ml-1'>
      {show ? paragraph : slicedParagraph}
      {paragraph.length < 350 === false && (
        <span>
          <button
            onClick={() => setShow(!show)}
            className="hover:underline hover:text-blue-500 dark:hover:text-gray-500 ml-2"
          >
            {show  ? 'Show Less' : 'Show More'}
          </button>
        </span>
      )}
    </span>
  )
}

export default ShowMoreOrLess