import React from 'react'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from 'react-router';
import { addRecipe, readRecipe, updateRecipe } from '../myBackend';
import { useEffect } from 'react';

export const RecipesForm = () => {

  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([""])
  const [steps, setSteps] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [recipe, setRecipe] = useState(null)
  const navigate = useNavigate()

    const {id} = useParams()
    console.log(id);
    console.log(recipe);
    
    useEffect(()=>{
      if(id){
      readRecipe(id,setRecipe)}
    },[id])

    useEffect(()=>{
      if (recipe) {
        setName(recipe.name)
        setCategory(recipe.category)
        setIngredients(recipe.ingredients)
        setSteps(recipe.steps)
        setPreview(recipe.imgUrl)
      }
    },[recipe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    let inputData = { name, ingredients, steps, category }
    console.log(inputData);
    if (id) {
      //update 
      await updateRecipe(id,!file? {...inputData,imgUrl:recipe.imgUrl,deleteUrl:recipe.deleteUrl}:inputData, file)
    } else {
      await addRecipe(inputData, file)
    }
    setName("")
    setCategory("")
    setSteps("")
    setIngredients([""])
    setFile(null)
    setLoading(false)
    navigate('/recipes')
  }
  const handleChangeIngredients = (index, value) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }
  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected)
    if (selected) {
      setPreview(URL.createObjectURL(selected))
    }
  }
  return (
    <div className='form' style={{ minHeight: '100vh', backgroundColor: 'lightyellow', position: 'relative' }}>
      <h1 style={{ textAlign: 'center' }}>Új recept feltöltése</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Receptneve:' value={name} onChange={(e) => setName(e.target.value)} required />
        <div>
          {ingredients.map((item, index) =>
            <div key={index}>
              <input type="text" value={item} onChange={(e) => handleChangeIngredients(index, e.target.value)} placeholder={`${index + 1} hozzávaló: `} />
            </div>
          )}
          <div className='pluszjel'>
            <FaPlus  onClick={() => setIngredients([...ingredients, ""])} />
          </div>
        </div>
        <textarea value={steps} onChange={(e) => setSteps(e.target.value)} placeholder='Elkészítés lépései: ' required></textarea>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Kategória: ' required />
        <input type="file" accept='image/*' onChange={handleFileChange} className='filevalszto'/>
        {preview && <img src={preview} alt='előnézet' style={{ maxHeight: 200, objectFit: "cover" }} />}
        <button type='submit' disabled={loading || (!file&&!preview)}>Mentés</button>
      </form>
      {loading && <div>Loading...</div>}
      <IoMdClose onClick={() => navigate("/recipes")} style={{ position: 'absolute', top: '5px', left: '5px', fontSize:"2.5rem" }} />
    </div>
  )
}