import React, {useState} from "react";

function ListingCard({item, listingArray, setListingArray }) {


  const [isStar, setIsStar] = useState(false);

  function handleStarClick() {
    setIsStar((isStar) => !isStar); // so this will do the opposite of itself just like serIsStar(!isStar)
  }


function handleRemove (itemId) {
  if (item.id === itemId) {
    fetch(`http://localhost:6001/listings/${itemId}`, {
      method: 'DELETE',
      body: JSON.stringify({
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
setListingArray(listingArray => listingArray.filter((item)=>{
  return item.id !== itemId
}))
  }
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
      <button onClick={handleStarClick} className={isStar? "emoji-button favorite active" :"emoji-button favorite"}>
        {isStar ? "☆" : "★"} 
      </button>
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button key = {item.id} onClick={()=>{handleRemove(item.id)}} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
