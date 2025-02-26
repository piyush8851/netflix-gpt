import React from 'react'
import { IMG_CDN } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-42 pr-4'>
      <img src={IMG_CDN + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
