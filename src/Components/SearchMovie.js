import { useSelector } from "react-redux";
import { API_OPTIONS, NETFLIX_BACKGROUND_IMAGE } from "../Utils/constants";
import Header from "./Header";
import { LANGUAGE_CONTSTANTS } from "../Utils/constants";
import { useRef, useState } from "react";
import SearchMovieList from "./SearchMovieList";

const SearchMovie = ()=>{

    const langKey = useSelector((store)=>store.config.language);
    const searchValue = useRef("");
    const [ searchMovieList, setSearchMovieList] = useState("");

    // async function main() {
    //     const chatCompletion = await client.chat.completions.create({
    //         messages: [{ role: 'user', content: searchValue.current.value }],
    //         model: 'gpt-3.5-turbo',
    //     });
    // }
    
    // main();

    const getSearchMovie = async (value)=> {

        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + value + "&page=1",API_OPTIONS);
        const json = await data.json();
        setSearchMovieList(json.results)
    }

    const handleClick = ()=>{
        getSearchMovie(searchValue.current.value);
    }
    console.log(searchMovieList.length);
    return(
        <>
            <Header />
            <div className="gpt-search-container" style={{backgroundColor:"black"}}>
                <img alt="img" src={ NETFLIX_BACKGROUND_IMAGE } style={{width: "100%"}}/>
                { searchMovieList.length !==0 && (<img alt="img" src={ NETFLIX_BACKGROUND_IMAGE } style={{width: "100%"}}/>) }
                <div className="search-container">
                    <form onSubmit={(event)=>event.preventDefault()}>
                        <input ref={ searchValue } type="text" placeholder={ LANGUAGE_CONTSTANTS[langKey].searchPlaceholder }/>
                        <button onClick={handleClick}>{ LANGUAGE_CONTSTANTS[langKey].searchText }</button>
                    </form>
                </div>
            </div>        
            
            { searchMovieList && (
                <SearchMovieList movie={searchMovieList}/>
            )}    
        </>
    )
}

export default SearchMovie;