import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/public/Login';
import AuthContextProvider from './helpers/auth/AuthContextProvider';
import RequireAuth from './helpers/auth/RequireAuth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import authRoutes from './routes/authRoutes';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        }>
          {authRoutes}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
