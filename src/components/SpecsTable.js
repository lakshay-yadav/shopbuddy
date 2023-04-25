import React, { useEffect, useState } from 'react'

const SpecsTable = () => {

  const [specs,setSpecs] = useState([])
  const [category,setCategory] = useState([])
  const specsData = async()=>{
    let input = localStorage.getItem("input")

      const response = await fetch(`http://127.0.0.1:5000/specs`,{
        method:'POST',
        headers: {
         Accept: "application/json",
         "Content-type": "application/json"
       },
       body: JSON.stringify({searchString:input})
      }) 

      const data = await response.json()
      
      setSpecs(data)

      // console.log(data)

      const response2 = await fetch(`http://127.0.0.1:5000/category`,{
        method:'POST',
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify({searchString:input})
      })

      const data2 = await response2.json()
       
      setCategory(data2)
      // console.log(data2)
     
      localStorage.setItem("category",JSON.stringify(data2))
      
  }

  useEffect(()=>{
     specsData()
  },[])

  const func = ()=>{
    let str = ""

    let temp = category[0]
    
    let i =0

    for(let x in temp)
    {
       str += `<h3 class='mt-5'>${temp[x]}</h3><hr />`   
      
       for(let y in specs[i]){
          str+=  `<div class='row'>
             <div class='col-lg-3'><strong>${y}</strong></div>
             <div class='col-lg-9'>${specs[i][y]} </div>
          </div>`
          
          // console.log("####")
          // console.log(y)
          // console.log(specs[i][y])
          
       }

       i+=1;
    }

     document.getElementById('specification-table').innerHTML = str
    //  console.log("this is str")
    //  console.log(str)
    return
  }
  return (
    <>
    {/* {console.log(specs)}
    {console.log(category)} */}
   
    
    <div class="container">
    <div class="card mt-5 w-100">
  <div class="card-header">
    <h1>Specifications</h1>
  </div>
  <div className='card-body' id='specification-table' style={{"overflowY":"auto",maxHeight:"500px"}}>
   {
     category.length>0 &&  func()
   }
  </div>
</div>
</div>
    </>
     
  )
}

export default SpecsTable