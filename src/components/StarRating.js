import React from 'react'
import ReactStars from "react-rating-stars-component";

const StarRating = ({v}) => {
  console.log(v)
  return (
    <>
    <ReactStars 
      count={5}
      size={24}
      edit={false}
      value={v}
      isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    />
    
    </>
  )
}

export default StarRating