import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ()=>{
    const movie = useSelector((store)=>store.movies.nowPlayingMovies);
    if(movie === null) return;

    const { id, original_title, overview} = movie[0];

    return(
        <div className="main-container">
            <VideoTitle title={ original_title } desc={ overview }/>
            <VideoBackground movieId={ id }/>
        </div>
    )
}

export default MainContainer;