import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { myUserContext } from '../context/MyUserProvider'
import { MyToastify } from './MyToastify'
import { useState } from 'react'

export const SignUp = () => {
  const {signUpUser,msg} = useContext(myUserContext)
  const [loading,setLoading] = useState(false)
  const handleSubmit=async(event)=>{
    event.preventDefault()
    setLoading(true)
    try {
      const data = new FormData(event.currentTarget)
    //console.log(data.get('email'),data.get('password'),data.get('display_name'));
    //firebase-backend:
    await signUpUser(data.get('email'),data.get('password'),data.get('displayName'))
    event.currentTarget.reset()
    } catch (error) {
      {msg && <MyToastify {...msg}/>}
    }finally{
      setLoading(false)
    }
    
  }
  return (
    <div className='signin-up-tarolo'>
      <form action="submit" onSubmit={handleSubmit}>
      <div className='signin'>
        <h1>Regisztrálj!</h1>
        <input name='email' type='email' placeholder='email'/>
        <input name="password" type="password" placeholder='jelszó'/>
        <input name="displayName" type="text" placeholder='Felhasználónév'/>
        <button className='gomb' disabled={loading}><b>{loading? "Regisztráció folyamatban" :"Regisztráció"}</b></button>
      </div>
      </form>
      {msg && <MyToastify {...msg}/>}
    </div>
  )
}
