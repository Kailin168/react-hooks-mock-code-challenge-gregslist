import React from "react";
import Search from "./Search";

function Header({listingArray, handleSearchButton}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchButton={handleSearchButton} listingArray={listingArray}/>
    </header>
  );
}

export default Header;
