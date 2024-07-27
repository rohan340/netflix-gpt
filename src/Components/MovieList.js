import { MOVIE_IMAGE_PATH } from "../Utils/constants";

const MovieList = ({ title, movies })=>{
    if(!movies) return;

    return(
        <div className="now-playing-movie-cards">
            <h1 style={{color: "white", marginLeft: 12}}>{ title }</h1>
            <div className="movie-cards">
                {
                    movies.map((item,id)=>{
                        return <img key={id} src={ MOVIE_IMAGE_PATH + item.poster_path} />
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;