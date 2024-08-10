import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);

    const fetchTopRatedMovies = async()=>{
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
            const json = await data.json();
            console.log(json)
            dispatch(addTopRatedMovies(json.results));
        }
        catch(error){
            console.error("Failed to fetch Top Rated Movies:", error);
        }
    }

    useEffect(()=>{
        if(topRatedMovies === null) fetchTopRatedMovies();
    },[])
}

export default useTopRatedMovies;