import React from 'react'
import { useNavigate } from 'react-router'

export const Home = () => {

  const navigate = useNavigate()

  return (
    
    <div className='home'>
      <div className='cucc'>
      <div className='tarolo'>
        <h1>RecipeBook</h1>
      <button className="homeSzlogen" onClick={()=>navigate("/recipes")}>Főzz, posztolj, inspirálj !</button>
      </div>
      </div>
    </div>
  )
}