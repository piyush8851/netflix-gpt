import React from 'react'
import MovieCard from './MovieCard';
import "../App.css"

const MovieList = ({title, movies}) => {
  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className=' flex overflow-x-auto scrollbar-hide'>   
            <div className='flex'>
            {movies && movies.map(movie => <MovieCard key={movies.id} posterPath={movie.poster_path} />) }
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
