'use client'

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

type Props = {
  url: string;
}

const VideoComponent = ({url} : Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <div className='w-full md:w-[400px] md:max-w-[50%] h-[200px] border-white my-5'>
          <ReactPlayer
            controls={true}
            url={url}
            width='100%'
            height='100%'
          />
        </div>
      )}
    </>
  )
}

export default VideoComponent