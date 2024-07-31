import { useSelector } from "react-redux";
import { NETFLIX_BACKGROUND_IMAGE } from "../Utils/constants";
import Header from "./Header";
import { LANGUAGE_CONTSTANTS } from "../Utils/constants";

const SearchMovie = ()=>{

    const langKey = useSelector((store)=>store.config.language)
    console.log(langKey)
    return(
        <>
            <Header />
            <div className="gpt-search-container">
                <img src={ NETFLIX_BACKGROUND_IMAGE } style={{width: "100%"}}/>
                <div className="search-container">
                    <input type="text" placeholder={ LANGUAGE_CONTSTANTS[langKey].searchPlaceholder }/>
                    <button>{ LANGUAGE_CONTSTANTS[langKey].searchText }</button>
                </div>
            </div>
            
        </>
    )
}

export default SearchMovie;