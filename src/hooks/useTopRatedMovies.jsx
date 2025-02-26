import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION, TOP_RATED_URL } from "../utils/constants";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const topMovie = useSelector(store => store.movies.topRatedMovies);
  const getTopRatedMovies = async() =>{
    const data = await fetch(TOP_RATED_URL, API_OPTION)
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }
  
  
  useEffect(()=> {
    topMovie && getTopRatedMovies();
  },[]);
}

export default useTopRatedMovies;