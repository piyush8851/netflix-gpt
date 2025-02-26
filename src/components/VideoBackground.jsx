import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
    
  return (
    <div className='w-screen h-screen'>
      <iframe className='w-screen h-screen' src={'https://www.youtube.com/embed/' + trailerVideo?.key + "?&autoplay=1&mute=1"}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
