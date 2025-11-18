import React from 'react'
import { useContext } from 'react'
import { myUserContext } from '../context/MyUserProvider'
import { MyToastify } from './MyToastify'

export const PwReset = () => {
    const {resetPassword, msg} = useContext(myUserContext) 
    const handleSubmit=async(event)=>{
        event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data.get('email'));
    await resetPassword(data.get('email'))

    }
  return (
    <div className='signin-up-tarolo'>
          <form action="submit" onSubmit={handleSubmit}>
          <div className='signin'>
            <h1>Jelszó módosítás</h1>
            <input name="email" type='email' placeholder='email'/>
            <button className='gomb'><b>Küldd az emailt!</b></button>
          </div>
          </form>
        </div>
  )
}
