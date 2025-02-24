import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION, URL } from "../utils/constants";

const useNowPlayinngMovies = () => {

    const dispatch = useDispatch();

  const getNowPlayingMovies = async() =>{
    const data = await fetch(URL, API_OPTION)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=> {
    getNowPlayingMovies();
  },[]);

}

export default useNowPlayinngMovies;