import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import avatar from '../assets/avatar.png'
import { useHistory } from 'react-router-dom'

const Profile = () => {
    
  const [user,setUser] = useState({})
  const history = useHistory()

  useEffect(()=>{
     setUser(JSON.parse(localStorage.getItem('user')))
  },[])
  

  const myfunc = async(event,input)=>{
      
      event.preventDefault()
       
      console.log(input)

      localStorage.setItem("input",input)

      const response = await fetch(`http://127.0.0.1:5000/website`,{
     method:'POST',
     headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
       body: JSON.stringify({searchString:input})
    })

    const data = await response.json()

    const response2 = await fetch(`http://127.0.0.1:5000/flipkart`,{
      method:'POST',
     headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({searchString:input})
    })

    let data2 = await response2.json()
    data2 = data2.slice(0,5)

    if(data.length>0)
    {
       localStorage.setItem("result",JSON.stringify(data))
       localStorage.setItem("images",JSON.stringify(data2))
       history.push('/results')
       return 
    }
    
  }
  
  return (
    <>
    
     <Navbar />
    
     <section>
 
    <div class="row w-100" style={{"position":"absolute","top":"20%",left:"10%"}}>
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{"width": "150px"}} />
            <h5 class="my-3">{user.name}</h5>
          
          </div>
        </div>
      
      </div>
      <div class="col-lg-8">
        <div class="card mb-4 w-75">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.name}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{user.email}</p>
              </div>
            </div>
       </div>
      </div>

      <div class="card mb-4 w-75">
          <div class="card-header">
             <h4>Your Wishlist</h4>
          </div>
          <div class="card-body">
            <ul>
              {
                user.wishlist!==undefined &&user.wishlist.length>0 && user.wishlist.map((u)=>{

                  return (
                    <>
                    <div className='row mb-4'>
                       <div className='col-lg-8'>
                       <li><strong>{u}</strong></li>
                       </div>
                       <div className='col-lg-4'>
                          <button className='btn btn-success' onClick={(e)=>myfunc(e,u)}>view details</button>
                       </div>
                    </div>
                     
                    
                    </>
                  )
                })
              }
            </ul>
            <hr />
       </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Profile