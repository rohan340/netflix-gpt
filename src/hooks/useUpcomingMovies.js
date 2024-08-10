import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const fetchUpcomingMovies = async()=>{
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        }
        catch(error){
            console.error("Failed to fetch Upcoming Movies:", error);
        }
    }

    useEffect(()=>{
        if(upcomingMovies === null) fetchUpcomingMovies();
    },[])
}

export default useUpcomingMovies;