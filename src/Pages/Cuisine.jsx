import React, { useEffect } from 'react'
import Category from '../Components/Category'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link,useParams} from 'react-router-dom'
import { useState } from 'react'




function Cuisine() {
    const [cuisine, setCuisine]= useState([])
    let params= useParams()



    const getCuisine= async (name) =>{
        const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3311761e9882409381dfbb8ca1e01378&number=15&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    };
    useEffect(()=> {
        getCuisine(params.type)
        console.log(params.type)
    },[params.type])
  return (
    <Grid>
        {cuisine.map((item)=>{
            return(
                <Card key={item.id}>
                <Link to ={'/recipe/'+item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
                </Card>
            )
        })}
        
    </Grid>
  )
}
const Grid =styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
grid-gap:3rem;`;

const Card =styled.div`
img {
    width:100%;
    border-radius:2rem;

}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}`




export default Cuisine
