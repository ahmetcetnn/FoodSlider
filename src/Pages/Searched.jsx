import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {

const [searchedRecipes,setSearchedRecipes]= useState([])
let params = useParams;
  const getSearched= async (name) =>{
    const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3311761e9882409381dfbb8ca1e01378&number=15&query=${name}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
};

useEffect(()=>{
getSearched(params.search);

},[])
  return (
    <div>
      
    </div>
  )
}

export default Searched
