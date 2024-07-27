const VideoTitle = ({title, desc})=>{
    return(
        <div className="video-title-container">
            <h1 style={{color:"white" }}>{ title }</h1>
            <p style={{color:"white", width: 500}}>{ desc }</p>
            <button>Play</button>
            <button>More Info</button>
        </div>
    )
}

export default VideoTitle;