import React from 'react'
import { useNavigate } from 'react-router'

export const SingIn = () => {
   const navigate = useNavigate()
  return (
    <div className='signin-up-tarolo'>
      <form action="">
      <div className='signin'>
        <h1>Jelentkezz be!</h1>
        <input name="name" type='email' placeholder='email'/>
        <input name="password" type="password" placeholder='jelszó'/>
        <button className='gomb'><b>Bejelentkezés</b></button>
      </div>
      </form>
    </div>
  )
}

