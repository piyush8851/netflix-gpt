import React from 'react'
import '../App.css';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black h-screen'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div >
      <button className='bg-white text-black text-center px-12 p-4 text-xl rounded-lg hover:bg-opacity-80'>▶️ Play</button>
      <button className='mx-2 bg-gray-500 bg-opacity-10 text-white text-center px-12 p-4 text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
