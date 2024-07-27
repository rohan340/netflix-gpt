import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = ()=>{

    //Get Now Playing Movies
    useNowPlayingMovies();

    //Get Popular Movies
    usePopularMovies();

    return(
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}

export default Browse;