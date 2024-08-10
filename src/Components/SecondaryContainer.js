import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const movies = useSelector((store)=>store.movies)

    return(
        <div className="movie-list-container">
            <MovieList title={"Now Playing"} movies={ movies.nowPlayingMovies }/>
            <MovieList title={"Top Rated"} movies={ movies.topRatedMovies }/>
            <MovieList title={"Upcoming"} movies={ movies.upcomingMovies }/>
            <MovieList title={"Popular"} movies={ movies.popularMovies }/>
        </div>
    )
}

export default SecondaryContainer;