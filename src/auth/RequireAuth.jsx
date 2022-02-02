import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../store/selectors";

let RequireAuth = ({component:Component}) => {
    let location = useLocation();
    let isAuth = useSelector((state)=>isAuthenticated(state));
    if(!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <Component />;
}

export default RequireAuth;