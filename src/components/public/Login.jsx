import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD:src/components/public/Login.jsx
import { useState } from 'react';
import { formValidation } from '../../utils/formValidation';
import FormError from '../FormError';
import AuthService from '../../auth';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions';
=======
import useAuth from "../../auth/useAuth";
import { useState } from 'react';
import { formValidation } from '../../util/formValidation';
import FormError from '../../components/FormError';
>>>>>>> cb2ad88 (conatct manage system basics completed):src/pages/public/Login.jsx
=======
import { useState } from 'react';
import { formValidation } from '../../utils/formValidation';
import FormError from '../FormError';
import AuthService from '../../auth';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions';
>>>>>>> 4cd971c (edited final-version)

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Contact Manager
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();
  let [fieldId, setFieldId] = useState("");
  let [value, setValue] = useState("");
  let [isValidInput, setIsValidInput] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  }

  const handleValidation = (event) => {
    //({isValidInput, errorMessage} = formValidation(event));
    //above statement is equal to {a, b} = {a:10, b:20}
    ({ isValidInput, errorMessage } = formValidation(event));
    setIsValidInput(isValidInput)
    setErrorMessage(errorMessage)
    setFieldId(event.target.id);
  }



  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    let user = {
      email: data.get('email'),
      password: data.get('password'),
    }
    let isValidForm = true;
    let keys = Object.keys(user);
    keys.forEach((key)=>{
      if(user[key].length===0){
        isValidForm = false;
        return;
      }
    })

    if(!isValidForm){
      setFieldId("submit");
      setIsValidInput(false);
      setErrorMessage("Please Fill the form Properly")
    }else{
      setFieldId("");
      setIsValidInput(true);
      setErrorMessage("")
      AuthService.signIn(user, (data) => {
        dispatch(signIn(user));
        navigate(from, { replace: true })
      })
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width:"500px" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleInput}
              onBlur={handleValidation}
            />
            <p className={`text-danger ${fieldId==="email" ? "d-block":"d-none"}`}>
              <FormError isHidden={isValidInput} errorMessage={errorMessage} />
            </p>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInput}
              onBlur={handleValidation}
            />
            <p className={`text-danger ${fieldId==="password" ? "d-block":"d-none"}`}>
              <FormError isHidden={isValidInput} errorMessage={errorMessage} />
            </p>
            <p className={`text-danger mb-0 ${fieldId==="submit" ? "d-block":"d-none"}`}>
              <FormError isHidden={isValidInput} errorMessage={errorMessage} />
            </p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Login;