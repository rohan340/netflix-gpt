import { useState } from "react";
import { MOVIE_IMAGE_PATH } from "../Utils/constants";
import Modal from "./Modal";

const MovieList = ({ title, movies }) => {
    const [ showModal, setShowModal] = useState(false);
    const [ selectedItem, setSelectedItem] = useState(null);

    if (!movies) return null;

    return (
        <div className="now-playing-movie-cards">
            <h1 style={{ color: "white", marginLeft: 12 }}>{title}</h1>
            <div className="movie-cards">
                {
                    movies.map((item, id) => {
                        return <img 
                        key={id} 
                        alt={item.title}
                        src={MOVIE_IMAGE_PATH + item.poster_path} 
                        onClick={()=>{
                            setShowModal(true)
                            setSelectedItem(item)
                        }}
                        />
                    })
                }
            </div>
            { showModal && ( <Modal setShowModal={setShowModal} movieItem={selectedItem}/> ) }
        </div>
    )
}

export default MovieList;