import { Navigate } from "react-router-dom";

let AuthStatus = () => {
    let token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />
    }
    else{
        return <Navigate to="/" />
    }
}

export default AuthStatus;