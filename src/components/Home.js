import React from "react";
import "../css/Home.css"
import Navbar from "./Navbar";
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
    // console.log(data2)


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
    <div className="content">
      <form className="row g-3">
        <div className="col-auto">
          <label for="inputSearch" className="visually-hidden">
            Search here
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSearch"
            name="searchString"
            placeholder="Search here"
          />
        </div>
        
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{onSubmitFunc(e)}}>
            Search
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Home;
