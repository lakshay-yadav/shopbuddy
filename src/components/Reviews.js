import React, { useEffect, useState } from 'react'

const Reviews = () => {
 
  const [review,setReview] = useState([])
  const [link,setLink] = useState("")

  const func = async()=>{

    let input = localStorage.getItem("input")

    const response = await fetch(`http://127.0.0.1:5000/flipkartreviews`,{
    method:'POST',
    headers: {
     Accept: "application/json",
     "Content-type": "application/json"
   },
   body: JSON.stringify({searchString:input})
  })
   
  const data = await response.json()

  setLink(data[data.length-1]['link'])
  data.pop()
  console.log(data)

  setReview(data)

}
  useEffect(()=>{
    func()
  },[])
  
  return (
    <>
     {

       review.length>0 && review.map((r)=>{
         return ( <div className='col-lg-4'>
                <div class="card">
                <div class="card-header">
                 <span class="badge badge-success">{r.rating} ★</span>
                 {r.shortreview}
                </div>
                <div class="card-body">
                  {r.longreview}
                </div>
                </div>
          </div>)
       })
     }
     {
      <div>
        <a href={link} target='_blank'>Click here for all reviews</a>
      </div>
     }
    </>
  )
}

export default Reviews