import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover' src= {BG_URL} alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
      </div>

      <div className=''>
        <h1>Gpt Search</h1>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>

  )
}

export default GptSearch

