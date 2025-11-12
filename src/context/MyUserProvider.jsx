import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router'

export const myUserContext = createContext()

export const MyUserProvider = ({children}) => {
  const [user,setUser] = useState()
  return (
    <myUserContext.Provider value={{user}}>
      {children}
    </myUserContext.Provider>
  )
}