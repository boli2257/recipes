import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { createUserWithEmailAndPassword, onAuthStateChanged,sendEmailVerification,signInWithEmailAndPassword,signOut, updateProfile } from 'firebase/auth'
import { auth } from "../firebaseApp"
import { MdUnsubscribe } from 'react-icons/md'
export const myUserContext = createContext()

export const MyUserProvider = ({children}) => {
  const [msg,setMsg]  = useState({})
  const [user,setUser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(currentuser)=>{
      setUser(currentuser)
    })
    return ()=>unsubscribe()
  },[])
  
  const signUpUser = async (email, password,displayName)=>{
    console.log(displayName,email,password);
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      await updateProfile(auth.currentUser,{displayName})
      await sendEmailVerification(auth.currentUser)
      console.log("Az emailedre aktiváló link érkezett!");
      
      console.log("Sikeres regisztráció!");
      setMsg({signUp:"Kattints az emailben kaptt aktiváló linkre"})
      setMsg(prev=>delete prev.err)
      logoutUser()
    } catch (e) {
      console.log("Bejelentkezési hiba: " + e);
      setMsg({err:e.message})
      
    }
  }
    const logoutUser = async ()=>{
      await signOut(auth)
      setMsg(prev=>delete prev.signIn)
    }
    const signInUser = async(email,password)=>{
      try {
          await signInWithEmailAndPassword(auth,email,password)
          const currentUser = auth.currentUser
          if(!currentUser.emailVerified){
            setMsg(prev=>prev.signIn)
            logoutUser()
            return
          }
          setMsg(prev=>delete prev.err)
          setMsg({signIn:true})
      } catch (error) {
        console.log(error);
        setMsg({err:error.message})
      }
    }

  return (
    <myUserContext.Provider value={{user, signUpUser, logoutUser,signInUser,msg}}>
      {children}
    </myUserContext.Provider>
  )
}