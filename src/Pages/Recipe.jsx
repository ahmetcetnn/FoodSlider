import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'





function Recipe() {
  let params = useParams();
  const [details,setDetails]=useState({});
    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=3311761e9882409381dfbb8ca1e01378`)
      const detailData = await data.json();
      setDetails(detailData)
    }

 
useEffect(()=>{
  fetchDetails()
},[params.name])


return (
    <div>
      {details.title}
    </div>
  )
}

export default Recipe
