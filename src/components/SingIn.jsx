import React from 'react'

export const SingIn = () => {
  return (
    <div>
      <div className='signin'>
        <h1>Jelentkezz be!</h1>
        <input type='email' placeholder='email'/>
        <input type="password" placeholder='jelszó'/>
        <button className='gomb'><b>Bejelentkezés</b></button>
      </div>
    </div>
  )
}

