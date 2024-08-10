import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async ()=>{
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        }
        catch(error){
            console.error("Failed to fetch Now playing Movies:", error);
        }   
    }

    useEffect(()=>{
        if(nowPlayingMovies === null) getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;