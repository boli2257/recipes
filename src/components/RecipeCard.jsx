import React from 'react'
import { MdEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { deleteRecipe } from '../myBackend';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { myUserContext } from '../context/MyUserProvider';
export const RecipeCard = ({ id, name, steps, ingredients, imgUrl, deleteUrl, uid, displayName, userPhoto }) => {

  const navigate = useNavigate()
  const { user } = useContext(myUserContext)
  console.log(id, displayName, uid);

  return (
    <div className='kartya hover-underline'>
      <h1>{name}</h1>

      <div className='hozzavalok'>
        {ingredients.map(obj => <p>{obj}</p>)}
      </div>
      <img src={imgUrl} alt={name} />
      <div className='lepesek'>
        {steps}
      </div>
      <div>
        <p>Uploaded by: {displayName}{/*{userPhoto && <img src={userPhoto} alt="" style={{height:60,width:60, borderRadius:"50%"}}/>}*/}</p>
      </div>
      {user && user.uid == uid &&
        <div className='gombok'>
          <IoTrashOutline size={30} onClick={() => deleteRecipe(id, deleteUrl)} />

          <MdEdit size={30} onClick={() => navigate("/edit/" + id)} />
        </div>
      }
    </div>
  )
}