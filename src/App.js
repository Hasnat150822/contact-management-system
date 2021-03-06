import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './pages/public/Login';
import AuthContextProvider from './auth/AuthContextProvider';
import RequireAuth from './auth/RequireAuth';
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
