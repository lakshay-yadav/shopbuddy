import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import Caraousel from './Caraousel'
import '../css/ResultTable.css'
import SpecsTable from './SpecsTable'
import StarRating from './StarRating'
import Reviews from './Reviews'
const Results = () => {

 const [data,setData] = useState([])
 const [images,setImages] = useState([])
 const [ratings,setRatings] = useState(null)

 const history = useHistory()

 console.log(history)

  useEffect(()=>{
      let x = JSON.parse(localStorage.getItem("result"))
      setData(x)
      
      let arr = JSON.parse(localStorage.getItem("category"))
      arr = arr[1]
      setRatings(arr)
      setImages(JSON.parse(localStorage.getItem('images')))
  },[])

  console.log("############")
  console.log(ratings)

  return (
    <>
      <Navbar />
       
       <div className='row ml-3'>
        
        <div className='col-lg-3'>
          <Caraousel />
        </div>
        
        <div className='col-lg-9'>
          {
            images.length>0 && (
              <>
              <h1>{images[0].name}</h1>
              <h5>{images[0].price}</h5>
              <h5><span class="badge badge-success">{images[0].rating} ★</span><bold style={{"color":"grey"}}> {images[0].noofrating}& {images[0].noofreview} </bold></h5>

              <h4 className='mt-3'>Ratings</h4>
              <div class='row'>
              {
                Object.keys(ratings).map((r)=>{
                  // console.log(ratings[r])
                  return (
                    <div class='col-lg-3'>
                    <strong>{r}</strong>
                    <span><StarRating v={ratings[r]}/><small>{ratings[r]}</small></span>
                    </div>
                  )
                })
              }
             
              </div>
               <hr />
              </>
            )
            
           
            
          }
{
        images.length>0 && (
          <> 
          <button className='btn btn-success'><a href={images[0].link} target='_blank' style={{color:'white',textDecoration:'none'}}>Buy Now</a></button>
            <button className='btn btn-danger ml-2'>Add to wishlist</button>
            </>
            )
        }
        </div>
       </div>
       
       <div className='row  mt-5 ml-3'>
        
        <h3>Reviews</h3>
        <hr className='w-100'/>
        
        <br />
          <Reviews />
        <hr className='w-100'/>
        
       </div>
  
  <section class="intro mt-5">
  <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-dark table-bordered mb-0">
              <thead>
             <tr>
            <th>Website</th>
            <th>Price</th>
            <th>Link to website</th>
            </tr>
            </thead>
            <tbody>
           {
             data.map((d)=>{
              return <tr>
                  <td>{d.siteName}</td>
                  <td>{d.price}</td>
                  <td><a href={d.link} target='_blank'><button className='btn btn-primary'>Buy Now</button></a></td>
             </tr>
           })
        }
        </tbody>
        
       </table>
      </div>
      </div>
      </div>
      </div>
      </div>
  </section>
   
   
    <div>
       {<SpecsTable></SpecsTable>}
    </div>

    
   </>
   )
  
}

export default Results