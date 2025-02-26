import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION, POPULAR_MOVIE_URL } from "../utils/constants";


const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovie = useSelector(store => store.movies.popularMovies);
  const getPopularMovies = async() =>{
    const data = await fetch(POPULAR_MOVIE_URL, API_OPTION)
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
  
  
  useEffect(()=> {
    !popularMovie && getPopularMovies();
  },[]);
}

export default usePopularMovies;