import { NETFLIX_BACKGROUND_IMAGE } from "../Utils/constants";
import Header from "./Header";

const SearchMovie = ()=>{
    return(
        <>
            <Header />
            <div className="gpt-search-container">
                <img src={ NETFLIX_BACKGROUND_IMAGE } style={{width: "100%"}}/>
                <div className="search-container">
                    <input type="text" placeholder="Search title"/>
                    <button>Search</button>
                </div>
            </div>
            
        </>
    )
}

export default SearchMovie;