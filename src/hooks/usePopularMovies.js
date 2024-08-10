import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../Utils/movieSlice"

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);

    const getPopularMovies = async ()=>{
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS) 
            const json = await data.json()
            dispatch(addPopularMovies(json.results))
        }
        catch(error){
            console.error("Failed to fetch popular movies:", error);
        }
    }

    useEffect(()=>{
        if(popularMovies === null) getPopularMovies();
    },[])
}

export default usePopularMovies;