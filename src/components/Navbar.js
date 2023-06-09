import React, { useEffect, useState } from 'react'
import "../css/Navbar.css";
import {NavLink} from "react-router-dom" 

const Navbar = () =>{

    const [user,setUser] = useState(null)

    useEffect(()=>{
          setUser(JSON.parse(localStorage.getItem("user")))
    },[])
    
    const func = ()=>{
       localStorage.setItem("user",null)
       setUser(null)
       return 
    }

    return (
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid text-white">

            <b>SHOP BUDDY</b>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
             
              <li className="nav-item">
                <NavLink  className='nav-link'  to="/">Home</NavLink>
              </li>
             
             {
               user==null && (
                  <li className="nav-item">
                    <NavLink  className='nav-link' to="/signup">Signup</NavLink>
                 </li>
                )
             }
              {
               
               user==null && (<li className="nav-item">
                 <NavLink  className='nav-link' to="/signin">Signin</NavLink>
                </li>)
              }
              
              {
               user!=null && (<li className="nav-item">
                 <NavLink className='nav-link' to='/' onClick={func}>logout</NavLink>
              </li>)
              }
              
              {
                user!=null &&(<li className='nav-item'>
                    <NavLink className='nav-link' to='/profile'>Profile</NavLink>
                 </li>)
              }

            </ul>
          </div>
        </div>
      </nav>
   
    );
}

export default Navbar;