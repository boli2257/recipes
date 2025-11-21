import { Navigate } from "react-router"
import { useContext } from "react"
import { myUserContext } from "./context/MyUserProvider"


export const Protectedroute = ({children}) => {

    const {user} = useContext(myUserContext)

        if(!user){
            return <Navigate to="/" replace/>
        }
  return children
}
