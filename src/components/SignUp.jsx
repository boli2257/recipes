import React from 'react'

export const SignUp = () => {
  return (
    <div>
      <div className='signin'>
        <h1>Regisztrálj!</h1>
        <input type='email' placeholder='email'/>
        <input type="password" placeholder='jelszó'/>
        <input type="password" placeholder='jelszó megerősítése'/>
        <button className='gomb'><b>Regisztráció</b></button>
      </div>
    </div>
  )
}
