import React from 'react'
import { MdEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { deleteRecipe } from '../myBackend';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { myUserContext } from '../context/MyUserProvider';
export const RecipeCard = ({ id, name, steps, ingredients, imgUrl, deleteUrl, uid, displayName }) => {

  const navigate = useNavigate()
  const { user } = useContext(myUserContext)
  console.log(id);

  return (
    <div className='kartya'>
      <h1>{name}</h1>
      <div className='hozzavalok'>
        {ingredients.map(obj => <p>{obj}</p>)}
      </div>
      <img src={imgUrl} alt={name} />
      <div className='lepesek'>
        {steps}
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