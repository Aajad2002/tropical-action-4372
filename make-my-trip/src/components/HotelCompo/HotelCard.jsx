import React from 'react'
import styled from 'styled-components'
import './HotelCard.css'
const HotelCard = ({id,HotelName,desc,price,star,rating,image}) => {
//    console.log(image)


  return (
    <div className='card'>
        <img src={image.toString()} alt={id}/>
       {/* <h2>{HotelName}</h2> */}
    <div className="name">
        <p className='rating'><i class="fa-sharp fa-solid fa-eye fa-2xm"></i> {rating}/5 (6077 RATINGS)</p>
        <h2>{HotelName}</h2>
        <p><i class="fa-solid fa-star"></i>{star}</p>
        <p><span>15th arrondissement</span><br/> {desc}</p>
        <p>Free Cancellation available at extra charges</p>
    </div>
    <div className="price">
        <h2>₹{price}</h2>
        <span>+₹{price}taxes & fees/Per Night</span>
        <p>No Cost EMI</p>
        <span>See Hotel For Best deals</span><br/>
        <button>View</button>
    </div>
    </div>
  )
}

export default HotelCard