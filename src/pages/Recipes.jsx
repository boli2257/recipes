import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { data, useNavigate, useParams } from 'react-router';
import { readRecipes } from '../myBackend';
import { RecipeCard } from '../components/RecipeCard';
import { useContext } from 'react';
import { myUserContext } from '../context/MyUserProvider';
export const Recipes = () => {

  const [recipes,setRecipes] = useState(null)
  const [loading,setLoading] = useState(false)
  const {user} = useContext(myUserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    readRecipes(setRecipes,setLoading)
  },[])
  console.log(recipes);
  
  return (
    <div className='recipes' style={{minHeight:'100vh', position:'relative'}}>
      
      {loading && <p>loading...</p>}
      <div style={{textAlign:'center'}}>
        {recipes&& recipes.length>0 && recipes.map(obj=><RecipeCard key={obj.id} {...obj}/>)}
      </div>
      
      <button disabled={!user} className='addnew'  onClick={()=>navigate("/addnew")} style={{float:"right", color:"beige"}}>Új recept hozzáadása</button>
    </div>
  )
}