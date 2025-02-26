import React from 'react'
import '../App.css';

const VideoTitle = ({title, overview}) => {

  const trimDescription = (text, limit) => {
    const words = text.split(' ');
    if(words.length > limit){
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }

  const description = trimDescription(overview, 50);
  return (
    <div className='pt-[10%] text-white bg-gradient-to-r from-black h-screen px-6 md:px-24 absolute'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden  md:inline-block py-6 text-lg w-1/4'>{description}</p>
      <div >
      <button className='bg-white text-black text-center px-2 md:px-12 py-1 md:py-4 text-xl rounded-lg hover:bg-opacity-80'>▶️ Play</button>
      <button className='hidden  md:inline-block mx-2 bg-gray-500 bg-opacity-10 text-white text-center px-12 p-4 text-xl rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
