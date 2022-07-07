import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingArray, setListingArray] = useState([])
  const [searchedName, setSearchedName] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(setListingArray)
  }, [])


// const searchResult = listingArray.filter(listing => listing.location.toLowerCase().includes(searchedName.toLowerCase()) || listing.location.toLowerCase().includes(searchedName.toLowerCase()))

  const searchResult = searchedName ? listingArray.filter((item) => {
    if (item.description.toLowerCase().includes(searchedName.toLowerCase())) {
      return true;
    }
  }
  ) : listingArray

  function handleSearchButton (textInInput) {
    setSearchedName(textInInput)
  }

  return (
    <div className="app">
      <Header handleSearchButton={handleSearchButton} listingArray={listingArray} />
      <ListingsContainer listingArray={listingArray} setListingArray={setListingArray} searchResult={searchResult} />
    </div>
  );
}

export default App;
