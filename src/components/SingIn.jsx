import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { myUserContext } from '../context/MyUserProvider'
import { useEffect } from 'react'
import { MyToastify } from './MyToastify'

export const SingIn = () => {
  const {signInUser, msg} = useContext(myUserContext)
   const navigate = useNavigate()
   useEffect(()=>{
      msg && msg?.signIn && navigate('/recipes')
    },[msg])

    
   const handleSubmit= (event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data.get('email'), data.get('password'));
    signInUser(data.get('email'),data.get('password'))
    //navigate('/recipes')
    //firebase-backend fgv. meghívása
   }
  return (
    <div className='signin-up-tarolo'>
      <form action="submit" onSubmit={handleSubmit}>
      <div className='signin'>
        <h1>Jelentkezz be!</h1>
        <input name="email" type='email' placeholder='email'/>
        <input name="password" type="password" placeholder='jelszó'/>
        <button className='gomb'><b>Bejelentkezés</b></button>
      </div>
      </form>
      <div><a href='' onClick={()=>navigate("/pwreset")}>Elfelejtett jelszó</a></div>
      {msg && msg?.err && <p style={{color:"red"}}>{msg.err}</p>}
      {msg && <MyToastify {...msg}/>}
    </div>
  )
}

