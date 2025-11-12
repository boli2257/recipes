import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { myUserContext } from '../context/MyUserProvider'

export const SignUp = () => {
  const {signUpUser,msg} = useContext(myUserContext)
  const handleSubmit=(event)=>{
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    //console.log(data.get('email'),data.get('password'),data.get('display_name'));
    //firebase-backend:
    signUpUser(data.get('email'),data.get('password'),data.get('displayName'))
    event.currentTarget.reset()
  }
  return (
    <div className='signin-up-tarolo'>
      <form action="submit" onSubmit={handleSubmit}>
      <div className='signin'>
        <h1>Regisztrálj!</h1>
        <input name='email' type='email' placeholder='email'/>
        <input name="password" type="password" placeholder='jelszó'/>
        <input name="displayName" type="text" placeholder='Felhasználónév'/>
        <button className='gomb'><b>Regisztráció</b></button>
      </div>
      </form>
      {msg &&(msg?.err || msg?.signUp) && <p style={{color:"red"}}>{msg?.err || msg?.signUp}</p>}
    </div>
  )
}
