import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { data, useNavigate, useParams } from 'react-router';
import { readRecipes } from '../myBackend';
import { RecipeCard } from '../components/RecipeCard';
import { MyHeader } from '../components/MyHeader';
export const Recipes = () => {

  const [recipes,setRecipes] = useState([])



  const navigate = useNavigate()

  useEffect(()=>{
    readRecipes(setRecipes)
  },[])
  console.log(recipes);
  
  return (
    <div className='recipes' style={{minHeight:'100vh', position:'relative'}}>
      <div>
      <MyHeader/>
      <FaHome onClick={()=>navigate("/")} style={{position:'absolute', top:'5px', left:'5px', fontSize:"2.5rem"}}/>
        </div>
      <div style={{textAlign:'center'}}>
        {recipes&& recipes.length>0 && recipes.map(obj=><RecipeCard key={obj.id} {...obj}/>)}
      </div>
      
      <button  onClick={()=>navigate("/addnew")} style={{float:"right", color:"beige"}}>Új recept hozzáadása</button>
    </div>
  )
}