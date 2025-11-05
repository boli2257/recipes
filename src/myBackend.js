import axios from "axios";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "./firebaseApp"
import imageCompression from "browser-image-compression";
const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const imgbburl = `https://api.imgbb.com/1/upload?key=${apiKey}`
console.log(imgbburl);

const uploadToIMGBB = async (file) => {
    const myFormData = new FormData()
    myFormData.append("image", file)
    try {
        const resonse = await axios.post(imgbburl, myFormData)
        const { url, delete_url } = resonse.data.data
        return { url, delete_url }
    } catch (error) {
        console.log("Képfeltöltési hiba: " + error);

    }
}

export const addRecipe = async (recipe, file) => {
    
    try {
        let imgUrl = ""
        let deleteUrl = ""
        //kicsinyítés27d2d605a569e0452f378a4e44c7c9c1
        const compressed = await imageCompression(file,{maxWidthOrHeight:800,useWebWorker:true})
        const result = await uploadToIMGBB(file)
        if (result) {
            imgUrl = result.url
            deleteUrl = result.delete_url
            console.log(result);
            
            const collectionref = collection(db, "recipes")
            await addDoc(collectionref, { ...recipe, imgUrl, deleteUrl, timestamp: serverTimestamp() })
        }
    } catch (error) {
        console.log("Nem sikerült hozzáadni!" + error);

    }
}