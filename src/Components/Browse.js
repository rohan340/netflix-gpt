import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = ()=>{

    //Get Now Playing Movies
    useNowPlayingMovies();

    //Get Popular Movies
    usePopularMovies();

    //Get Top Rated Movies
    useTopRatedMovies();

    //Get Upcoming Movies
    useUpcomingMovies();

    return(
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}

export default Browse;