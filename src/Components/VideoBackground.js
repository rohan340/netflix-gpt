import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";

const VideoBackground = ({ movieId })=>{
    const [ trailerKey, setTrailerKey] = useState(null);

    const backGroundVideo = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((data)=> data.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerKey(trailer.key)
    }

    useEffect(()=>{
        backGroundVideo();
    },[]);

    if(trailerKey === null) return;

    return(
        <div className="video-container">
            <iframe 
                width="100%" 
                height="750" 
                src= { "https://www.youtube.com/embed/"+ trailerKey +"?&autoplay=1&mute=1"} 
                title="Inside Out 2 | Final Trailer" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                frameBorder={0}
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground;