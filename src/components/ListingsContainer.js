import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchResult, setListingArray, listingArray}) {
  return (
    <main>
      <ul className="cards">
        {searchResult.map((item)=>{
          return(<ListingCard listingArray={listingArray} setListingArray={setListingArray} searchResult={searchResult} item={item}/>)
        })}
       
      </ul>
    </main>
  );
}

export default ListingsContainer;
