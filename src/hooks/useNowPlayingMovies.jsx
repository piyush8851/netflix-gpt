import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION, URL } from "../utils/constants";

const useNowPlayinngMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);


  const getNowPlayingMovies = async() =>{
    const data = await fetch(URL, API_OPTION)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=> {
    if(!nowPlayingMovies){
      getNowPlayingMovies();
    }
    
  },[]);

}

export default useNowPlayinngMovies;