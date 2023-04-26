import React from "react";
import "../css/Home.css"
import Navbar from "./Navbar";
import shopping from "../assets/shopping.gif"

import { useHistory } from "react-router-dom";

const Home = () => {

   const history = useHistory()

  const onSubmitFunc = async(event)=>{
   
    event.preventDefault()
    const input = document.getElementById('inputSearch').value
    document.getElementById('inputSearch').value = ''
    // console.log(input)

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
  //  console.log(data)
    
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

    <div className="row">
       <div className="col-lg-1"></div>
        <div className="col-lg-4 h-100 align-self-center">
          
          <img className="img-fluid ml-5" src={shopping} alt="gif"/>
        
        </div>
        
        <div className="col-lg-2"></div>
        <div className="col-lg-5 h-100 align-self-center">
           
           <form>
              <div className="form-row"> 
                   <div className="col">
                       <input type="text" className="form-control" style={{"minHeight":"50px",width:"300px",margin:"0px"}} id="inputSearch" name="searchString"
                        placeholder="search here" required />
                        <button  className="btn btn-primary content" style={{"minHeight":"50px"}} onClick={(e)=>{onSubmitFunc(e)}}>🔍</button>
                   </div>
              </div>
           </form>
        </div>
        
    </div>
    
    </>
  );
};

export default Home;
