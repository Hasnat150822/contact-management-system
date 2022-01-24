import RequireAuth from '../auth/RequireAuth';
import NotFound from '../components/pages/NotFound';
import Main from '../components/pages/Main';
import authRoutes from './authRoutes';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from '../components/public/Login';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../store/selectors';
const MainRoutes = () => {
    let isAuth = useSelector((state) => isAuthenticated(state));
    return (
        <Routes>
            <Route path="/login" element={
                <>
                    {isAuth && <Navigate to="/" />}
                    {!isAuth && <Login />}
                </>
            } />
            <Route path="/" element={<RequireAuth component={Main} />}>
                {authRoutes}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>)
}

export default MainRoutes;