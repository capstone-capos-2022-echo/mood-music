import React from "react";
import AiOutlineFileSearch from 'react-icons/ai'


const SearchBar = ({songs}) => {
    
  return (
   <div className="search">
    <div className="searchInputs">
        <input type="text" placeholder="Find a song" />
        <div>
            <AiOutlineFileSearch />
        </div>
    </div>
        <div className="dataResult">
            {songs.map((value, key)=>{
                return <div>{value.title}</div>
            })}
        </div>
   </div>
  )
};

export default SearchBar;
