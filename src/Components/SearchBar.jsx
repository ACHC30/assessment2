import { useState } from "react";

function SearchBar(props){
    const [innerSearch, setInnerSearch] = useState("");
    return(
        <div>
            <input 
            type="search" 
            id = "search" 
            name = "search" 
            aria-labelledby="search-button"
            value={innerSearch}
            onChange={e => setInnerSearch(e.target.value)}
            />
            <button  
            type="button" 
            id = "search-button"
            onClick={() => props.onSubmit(innerSearch)}
            >Search</button>
        </div>
    );
}

export default SearchBar;