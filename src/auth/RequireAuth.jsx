import { Navigate, useLocation } from "react-router-dom";

let RequireAuth = ({children}) => {
    let location = useLocation();
    let token = localStorage.getItem("token");
    if(!token) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default RequireAuth;