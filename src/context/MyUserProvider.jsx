import React from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createUserWithEmailAndPassword, onAuthStateChanged,sendEmailVerification,sendPasswordResetEmail,signInWithEmailAndPassword,signOut, updateProfile } from 'firebase/auth'
import { auth } from "../firebaseApp"
export const myUserContext = createContext()

export const MyUserProvider = ({children}) => {
  const [msg,setMsg]  = useState({})
  const [user,setUser] = useState(null)
  const navigate = useNavigate()
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
      logoutUser()
    } catch (e) {
      console.log("Bejelentkezési hiba: " + e);
      setMsg({err:e.message})
      
    }
  }
    const logoutUser = async ()=>{
      await signOut(auth)
    }
    const signInUser = async(email,password)=>{
      try {
          await signInWithEmailAndPassword(auth,email,password)
          const currentUser = auth.currentUser
          if(!currentUser.emailVerified){
            setMsg({err:"Kattints az mailben kapott aktiváló linkre!"})
            logoutUser()
            return
          }

          setMsg({signIn:true})
      } catch (error) {
        console.log(error);
        setMsg({err:error.message})
      }
    }
    //új jelszó
    const resetPassword = async(email)=>{
      let success = false
      try {
        await sendPasswordResetEmail(auth,email)
        setMsg({resetPw:"A jelszó visszaállítási email elküldve!"})
      } catch (error) {
        setMsg({err:error.message})
        
      }finally{
        if(success){
          navigate("/")
        }
      }
    }

  return (
    <myUserContext.Provider value={{user, signUpUser, logoutUser,signInUser,msg,setMsg,resetPassword}}>
      {children}
    </myUserContext.Provider>
  )
}