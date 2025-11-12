import React from 'react'
import { useNavigate } from 'react-router'

export const SignUp = () => {
  const handleSubmit=(event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data.get('email'),data.get('password'),data.get('display_name'));
    
  }
  return (
    <div className='signin-up-tarolo'>
      <form action="submit" onSubmit={handleSubmit}>
      <div className='signin'>
        <h1>Regisztrálj!</h1>
        <input name='email' type='email' placeholder='email'/>
        <input name="password" type="password" placeholder='jelszó'/>
        <input name="display_name" type="text" placeholder='Felhasználónév'/>
        <button className='gomb'><b>Regisztráció</b></button>
      </div>
      </form>
    </div>
  )
}
