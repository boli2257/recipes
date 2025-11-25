import axios from "axios"
import imageCompression from "browser-image-compression"

const API_URL ="http://localhost:5050/api/"
//const API_URL = "https://recipe-backend-brown.vercel.app/api/"
const convertToBase64=(file)=>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>resolve(reader.result)
        reader.onerror=(error)=>reject(error)
    })
}
//feltöltés
export const uploadImage=async(file)=>{
    try {
        const compressed = await imageCompression(file,{maxWidthOrHeight:800,useWebWorker:true})
        const base64 = await convertToBase64(compressed)
        const resp = await axios.post(API_URL+"uploadImage",{image:base64})
        return resp.data//url, public_id
        
        
    } catch (error) {
        console.log("Image Update failed"+error);
        return null
    }
}
export const deleteImg = async(public_id)=>{
    console.log(public_id);
    try {
        const resp = await axios.post(API_URL+"deleteImage", {public_id})
        console.log(resp.data);
        return resp.data
        
    } catch (error) {
        console.log("Fotó törlése nem sikerült a cloudinaryról: " + error);
        
    }
    
}