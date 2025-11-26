import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { myUserContext } from '../context/MyUserProvider'
import { Navigate, useNavigate } from 'react-router'
import { useState } from 'react'

export const MyToastify = () => {
    const {setMsg, msg}=useContext(myUserContext)
    console.log(msg);
    
    const navigate =useNavigate()
    useEffect(()=>{
        if(msg?.err){
            toast.error(msg?.err,{position:"bottom-center"})
            setMsg({})
        }else if(msg?.signUp){
            toast.success(msg?.signUp,{position:"bottom-center"})
            setTimeout(()=>{
                navigate("/signin")
                setMsg({})
            },5000)
        }else if(msg?.resetPw){
            toast.success(msg?.resetPw,{position:"bottom-center"})
            setMsg(null)
        }else if(msg?.serverMsg){
            toast.success(msg?.resetPw,{position:"bottom-center"})
            setMsg(null)
        }
    },[msg])
  return null;
}