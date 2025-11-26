import React from 'react'
import { useContext } from 'react'
import { myUserContext } from '../context/MyUserProvider'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import {deleteAvatar} from "../myBackend"

export const UserProfile = () => {
    const { user, avatarUpdate, deleteAccount } = useContext(myUserContext)
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate('/')
    
    
    const handleFileChange = (e) => {
        const selected = e.target.files[0]
        setFile(selected)
        if (selected) {
        setPreview(URL.createObjectURL(selected))
        }
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setLoading(true)
        if(!file) return
        try {
            await avatarUpdate(file)
        } catch (error) {
            console.log("Upload failed: "+ error);
            
        }finally{
            setLoading(false)
        }
    }
    const handleDelete=async(e)=>{
        if(window.confirm("Biztosan szeretné törölni?")){
            const pw=prompt("Add meg a jelszavad a törléshez!")
            await deleteAvatar(user.uid)
            await deleteAccount(pw)
        }
    }
    return (
        <div className='profileform'>
            <h2>Profil módosítás</h2>
            <div>
                <h4>Felhasználónév: {user?.displayName}</h4>
                <p>Email: {user?.email}</p>
                {user?.photoURL && (<img style={{width:"50px", height:"50px",borderRadius:"50%", objectFit:"cover"}} src={user.photoURL} alt="Profilkép" />)}
            </div>
            <form onSubmit={handleSubmit}>
                <label>Új profilkép:</label>
                <input type="file" accept='image/*' onChange={handleFileChange} className='filevalszto' />
                <button type='submit' disabled={loading}>{loading? "Mentés..." : "Profil frissítése!"}</button>
                
            </form>
            {preview && (<img src={preview} alt='előnézet' style={{ width:"50px", height:"50px",borderRadius:"50%", objectFit: "cover" }} />)}
            <button onClick={handleDelete} style={{position:"fixed",bottom:"5px",right:"5px", backgroundColor:"red"}}>Fiók törlése</button>
        </div>
    )
}

