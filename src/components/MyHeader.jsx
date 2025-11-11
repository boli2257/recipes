import React from 'react'
import { TbLogin2 } from "react-icons/tb";
import { useNavigate } from 'react-router';
export const MyHeader = () => {
    const navigate = useNavigate()
  return (
    <div className='header'>
      <button onClick={()=>navigate("/signin")}>SignIn</button>
      <button onClick={()=>navigate("/signup")}>SignUp</button>
    </div>
  )
}
