import React from 'react'

function Banner({pageName,pageDetails}) {

 
  return (
    <div className='banner' style={{color:"white",fontWeight:"600" ,display:"flex",textAlign:"center",flexDirection:"column"}}>
    <h1>  {pageName}</h1>
    <p style={{fontSize:"15px"}}>{pageDetails}</p>
      </div>
  )
}

export default Banner