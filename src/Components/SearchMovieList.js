import { useState } from "react";
import { MOVIE_IMAGE_PATH } from "../Utils/constants";
import Modal from "./Modal";

const SearchMovieList = ({movie})=>{

    const [ showModal, setShowModal] = useState(false);
    const [ selectedItem, setSelectedItem] = useState(null);

    return(
        movie.length !== 0 ? (
        <>
        <div className="search-movie-list-container">
            <h1>Movies</h1> 
            <div className="search-movie-cards">
                {
                    movie.map((item,id)=>{
                        if(item.poster_path != null){
                            return <img 
                                    alt={item.title}  
                                    key={id} 
                                    src={ MOVIE_IMAGE_PATH + item.poster_path} 
                                    onClick={()=>{
                                        setShowModal(true)
                                        setSelectedItem(item);
                                    }}
                                />
                        }
                        return null;
                    })
                }
            
            </div>
        </div>
        { showModal && <Modal setShowModal={ setShowModal } movieItem={ selectedItem }/>}
        </>
        ) : (<div className="search-movie-list-container"><h1>No Result Found</h1></div>) 
    )
}

export default SearchMovieList;