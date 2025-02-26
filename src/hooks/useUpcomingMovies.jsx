import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION, UPCOMING_MOVIE_URL } from "../utils/constants";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovie = useSelector(store => store.movies.upcomingMovies);
  const getUpcomingMovies = async() =>{
    const data = await fetch(UPCOMING_MOVIE_URL, API_OPTION)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }
  
  
  useEffect(()=> {
    upcomingMovie && getUpcomingMovies();
  },[]);
}

export default useUpcomingMovies;