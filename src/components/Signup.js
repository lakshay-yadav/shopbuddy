import React from "react";
import "../css/signin.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import {NavLink, useHistory} from "react-router-dom";
import WaitingLoader from "./WaitingLoader";
import { API } from "./Backend";

const Signup = () => {

  const [values,setValues] = useState({
     name : "",
     email:"",
     password:"",
     confirmpassword : ""
  })
  const [loading,setLoading] = useState(false)
  const history = useHistory()

  const {name,email,password,confirmpassword} = values

  const handleChange = (event,name)=>{
    setValues({...values,error:false,[name]: event.target.value})
  } 


  const onSubmitFunc = async(event)=>{
    
    event.preventDefault()
    setLoading(true)
    const response = await fetch(`${API}/signup`,{
      method:'POST',
      headers: {
       Accept: "application/json",
       "Content-type": "application/json"
     },
     body: JSON.stringify(values)
    })

    const data = await response.json()
  
    // console.log("this is me")
    // console.log(data.status==="Ok")
    
    if(data.status==="Ok")
    {
         toast.success("signup Successfull")
         toast.info("signin to continue")
         history.push('/signin')
         return 
    }
    
      setLoading(false)
      return toast.error(data.status)

    // console.log(data.status)

    
} 

  return (
    <>
    <Navbar />
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample" />
      </div>
      {loading && <WaitingLoader />}
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

        <div className="form-outline mt-5 mb-3">
          <label className="form-label" for="name">Full Name</label>
            <input type="text" id="fullName" name="name" onChange={(e)=>{handleChange(e,"name")}} className="form-control form-control-lg"
              placeholder="Enter full name" />
          
          </div>
         
          <div className="form-outline mb-3">
          <label className="form-label" for="email">Email address</label>
            <input type="email" id="email" name="email" onChange={(e)=>{handleChange(e,"email")}} className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" for="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e)=>{handleChange(e,"password")}} className="form-control form-control-lg"
              placeholder="Enter password" />
           
          </div>

          <div className="form-outline mb-3">
          <label className="form-label" for="password">Confirm Password</label>
            <input type="password" id="confirmpassword" name="confirmpassword" onChange={(e)=>{handleChange(e,"confirmpassword")}} className="form-control form-control-lg"
              placeholder="Enter password" />
           
          </div>

          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style = {{"padding-left": "2.5rem", "padding-right": "2.5rem"}} onClick={(e)=>{onSubmitFunc(e)}} disabled = {password!==confirmpassword || loading}>Register</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <NavLink to="/signin"
                className="link-danger">Sign in</NavLink></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
    </>
  );
};

export default Signup;
