import React from 'react'
import { MdEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { deleteRecipe } from '../myBackend';
import { useNavigate } from 'react-router';
export const RecipeCard = ({id,name,steps,ingredients,imgUrl,deleteUrl}) => {

    const navigate = useNavigate()
console.log(id);

  return (
    <div className='kartya'>
      <h1>{name}</h1>
      <div className='hozzavalok'>
        {ingredients.map(obj =><p>{obj}</p>)}
        </div>
      <img src={imgUrl} alt={name}/> 
      <div className='lepesek'>
      {steps}
      </div>
      <div className='gombok'>
      <IoTrashOutline size={30} onClick={()=>deleteRecipe(id, deleteUrl)}/>
        <MdEdit size={30} onClick={()=>navigate("/edit/"+id)}/>
            </div>
    </div>
  )
}