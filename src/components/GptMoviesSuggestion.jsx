import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMoviesSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieResults, movieNames} = gpt;
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black/90 bg-opacity text-white'>
      {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies = {movieResults[index]} />)}  
    </div>
  )
}

export default GptMoviesSuggestion
