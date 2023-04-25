import React from "react";
import "../css/signup.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";

const Signup = () => {

  const [values,setValues] = useState({
     name : "",
     email:"",
     password:"",
     confirmpassword : ""
  })

  const history = useHistory()

  const {name,email,password,confirmpassword} = values

  const handleChange = (event,name)=>{
    setValues({...values,error:false,[name]: event.target.value})
  } 


  const onSubmitFunc = async(event)=>{
    
    event.preventDefault()

    const response = await fetch(`http://127.0.0.1:5000/signup`,{
      method:'POST',
      headers: {
       Accept: "application/json",
       "Content-type": "application/json"
     },
     body: JSON.stringify(values)
    })

    const data = await response.json()

    // console.log(data)

    if(data.status==="OK")
    {
         toast.success("signup Successfull")
         toast.info("signin to continue")
         history.push('/signin')
         return 
    }
    
      return toast.error(data.status)

    // console.log(data.status)

    
} 

  return (
    <>
    <Navbar />
    <div className="signup">
      <div className="mb-3">
        <label for="Full name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Full name"
          name="name"
          onChange={(e)=>{handleChange(e,"name")}}
          required
        />
      </div>
      <div className="mb-3">
        <label for="Email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          name="email"
          onChange={(e)=>{handleChange(e,"email")}}
          required
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
          onChange={(e)=>{handleChange(e,"password")}}
          required
        />
      </div>
      <div className="mb-3">
        <label for="Confirmpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmpassword"
          placeholder="Confirm password"
          name="confirmpassword"
          onChange={(e)=>{handleChange(e,"confirmpassword")}}
          required
        />
      </div>
      <div>
    <button type="submit"
      className="btn btn-primary mb-3"
      onClick={(e)=>{onSubmitFunc(e)}}
      disabled = {password!==confirmpassword}
    >SignUp</button>
  </div>
    </div>
    </>
  );
};

export default Signup;
