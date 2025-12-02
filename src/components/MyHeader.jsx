import React from 'react'
import { useNavigate } from 'react-router';
import { RxAvatar } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { useContext } from 'react';
import { myUserContext } from '../context/MyUserProvider';
export const MyHeader = () => {
  const { user, logoutUser } = useContext(myUserContext)
  console.log(user);

  const navigate = useNavigate()
  return (
    <div className='header'>
      <div className='header-left'>
        <FaHome onClick={() => navigate("/")} style={{ position: 'absolute', top: '5px', left: '5px', fontSize: "2.5rem" }} className='homeicon'/></div>
      {user ?
        <div className='kijelentkezes'>
          <span onClick={()=>navigate("/profile")}>
          {user?.photoURL ? 
          <img style={{width:"50px", height:"50px",borderRadius:"50%", objectFit:"cover"}} src={user.photoURL} alt="Profilkép" />
          :
          
              <RxAvatar className='avatar' size={35} title={user.displayName} />
            
            }
          </span>
          <button className='kijgomb' onClick={() => logoutUser()}>Kijelentkezés</button>
        </div>
        :
        <div className='header-right'>
          <button className='gomb' onClick={() => navigate("/signin")}>SignIn</button>
          <button className='gomb' onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      }

    </div>
  )
}
