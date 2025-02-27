import React, { useState } from "react";

function Search({handleSearchButton}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const [searchInput, setSearchInput]= useState ('')
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={(e)=>handleSearchButton(searchInput)} type="submit">🔍</button>
    </form>
  );
}

export default Search;
