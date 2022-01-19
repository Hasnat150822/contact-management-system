import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/public/Login';
import AuthContextProvider from './helpers/auth/AuthContextProvider';
import RequireAuth from './helpers/auth/RequireAuth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';

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
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
