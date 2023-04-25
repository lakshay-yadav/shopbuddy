import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../css/signin.css'
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';

const Signin = () => {
  
  const history = useHistory();
  
  console.log(history)
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

      if(data.status==="OK")
      {
      
        toast.success("signin Successfull")
        history.push('/profile')
        return
      }
        return toast.error(data.status)

      
  }
  
 

  return (
    <>
    <Navbar/>
    <div className="signin">
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
        />
      </div>
      <div className="">
    <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{onSubmitFunc(e)}}>Sign in</button>
  </div>
    </div>
    </>
  );
}

export default Signin;