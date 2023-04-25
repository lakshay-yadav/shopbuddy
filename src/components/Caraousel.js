import React, { useEffect, useState } from 'react'

const Caraousel = () => {

  const [images,setImages] = useState([])

  useEffect(()=>{
     setImages(JSON.parse(localStorage.getItem("images")))
  },[])

  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" src={images.length>0 && images[0].src} alt="First slide" />
    </div>

    {
      images.map((i)=>{
         
        return (
          <div class="carousel-item" >
          <img class="d-block" src={i.src} alt="Second slide" />
        </div>
        
        )
      })  
    }
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"  style={{backgroundColor:'black'}}></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}

export default Caraousel