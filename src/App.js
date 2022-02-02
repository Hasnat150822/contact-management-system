import { useDispatch } from 'react-redux';
import './App.css';
import MainRoutes from './routes/mainRoutes';
import { isAuthenticated } from './store/actions';

function App() {
  let dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if(token){
    dispatch(isAuthenticated(true))
  }else{
    dispatch(isAuthenticated(false))
  }
  return (
    <MainRoutes />
  );
}

export default App;