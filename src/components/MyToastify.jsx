import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { myUserContext } from '../context/MyUserProvider'
import { Navigate, useNavigate } from 'react-router'
import { useState } from 'react'

export const MyToastify = ({err, signUp,resetPw}) => {
    const {setMsg, msg}=useContext(myUserContext)
    console.log(msg);
    
    const navigate =useNavigate()
    useEffect(()=>{
        if(err){
            toast.error(err,{position:"top-center"})
            setMsg({})
        }else if(signUp){
            toast.success(signUp,{position:"top-center"})
            setTimeout(()=>{
                navigate("/signin")
                setMsg({})
            },5000)
        }else if(resetPw){
            toast.success(resetPw,{position:"top-center"})
            setMsg({})
            navigate("/signin")
        }
    },[err, signUp,resetPw])
  return (
    <ToastContainer/>
  )
}