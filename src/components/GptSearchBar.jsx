import React, { useEffect, useRef } from 'react'
import { API_OPTION, GEMINI_KEY, GEMINI_URL } from '../utils/constants';
import {useDispatch} from 'react-redux'
import { addSuggestedMovies } from '../utils/gptSlice';


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef();

    const searchMovieTmdb = async(movie) => {
        const encodedData = movie.replace(/ /g, "%20");
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + encodedData +"&include_adult=false&language=en-US&page=1", API_OPTION);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => { 
        const gptQuery = "Act as a Movie Recommendation System and Suggest some movies for the query " + searchText.current.value + ". Provide only the names of the top 5 movies in a comma-separated format like this: 'Movie1, Movie2, Movie3, Movie4, Movie5'.";
    
      const url = GEMINI_URL + GEMINI_KEY;
      const payload = {
        contents: [{
          parts: [{"text": gptQuery}]
        }]
      };
    
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
    
        const json = await res.json();
        const gptMovies =json.candidates[0].content.parts[0].text ? json.candidates[0].content.parts[0].text.split(',') : "";
        
        const movieName = gptMovies[4].replace(/[\n\t]/g, '');
        gptMovies[4] = movieName;
        
        // for each movie i will search tmdb api 

        const promiseArray =  gptMovies.map(movie => searchMovieTmdb(movie.trim())); 
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addSuggestedMovies({movieNames: gptMovies,movieResults: tmdbResults}));
        
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    

    if(searchText.current){
        handleGptSearchClick();
    }

  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 items-center bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className='col-span-9 p-4 m-4 border-black bg-white' placeholder='What would you like to watch today?' />
            <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>Search</button>
        </form>
      
    </div>
  )
};

export default GptSearchBar;
