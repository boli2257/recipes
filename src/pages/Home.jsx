import React from 'react'
import { useNavigate } from 'react-router'

export const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='home'>
      <div className='cucc'>
      <h1>RecipeBook</h1>
      <button onClick={()=>navigate("/recipes")}>Főzz, posztolj, inspirálj !</button>
      </div>
    </div>
  )
}