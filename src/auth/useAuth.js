import { useContext } from "react"
import { AuthContext } from "./AuthContextProvider"

let useAuth = () =>{
    return useContext(AuthContext)
}

export default useAuth;