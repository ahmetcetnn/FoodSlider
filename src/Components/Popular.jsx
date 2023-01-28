import { useEffect,useState } from "react";
import { Splide } from "@splidejs/react-splide";
import { SplideSlide } from '@splidejs/react-splide';


function Popular() {

  const [popular,setPopular]=useState([]);



useEffect(() => {
    getPopular();

},[]);


  const getPopular = async () =>{
    const api =  await fetch (`https://api.spoonacular.com/recipes/random?apiKey=3311761e9882409381dfbb8ca1e01378&number=15`)
    const data = await api.json();
    setPopular(data.recipes)

  } 
  return <div>
   {popular.map((recipe)=> {
    return (
      <div className="wrapper" key={recipe.id}>
        <h3>Popular Picks</h3>

  <Splide options={
    {
      perPage:4,
      arrows:false,
      pagination: false,
      drag : "free",
      gap: "5rem",
    }
  }>
    <SplideSlide>
    <div className="card">  
          <p>{recipe.title}</p> 
          <img src={recipe.image} alt={recipe.title}/>
        </div>
    </SplideSlide>
  </Splide>
  
  
  
        
       
        

      </div>


    )
   })}
  </div>
}



export default Popular
