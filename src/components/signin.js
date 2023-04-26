import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../css/signin.css'
import { toast } from 'react-toastify';
import {NavLink, useHistory} from 'react-router-dom';

const Signin = () => {
  
  const history = useHistory();
  
  const [values,setValues] = useState({
    email:"",
    password:"",
  })

  const handleChange = (event,name)=>{
    setValues({...values,error:false,[name]: event.target.value})
  } 

  const onSubmitFunc = async(event)=>{
    
      event.preventDefault()

      const response = await fetch(`http://127.0.0.1:5000/signin`,{
        method:'POST',
        headers: {
         Accept: "application/json",
         "Content-type": "application/json"
       },
       body: JSON.stringify(values)
      })

      const data = await response.json()

      if(data.email)
      {
        localStorage.setItem("user",JSON.stringify(data))
        toast.success("signin Successfull")
        history.push('/profile')
        return
      }
        return toast.error(data.status)

      
  }
  
 

  return (
    <>
    <Navbar/>
    
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
         
          <div className="form-outline mt-5">
          <label className="form-label" for="email">Email address</label>
            <input type="email" id="email" name="email" onChange={(e)=>{handleChange(e,"email")}} className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" for="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e)=>{handleChange(e,"password")}} className="form-control form-control-lg"
              placeholder="Enter password" />
           
          </div>

          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style = {{"padding-left": "2.5rem", "padding-right": "2.5rem"}} onClick={(e)=>{onSubmitFunc(e)}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/signup"
                className="link-danger">Register</NavLink></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
    
    </>
  );
}

export default Signin;