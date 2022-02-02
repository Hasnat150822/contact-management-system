import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { formValidation } from '../utils/formValidation';
import FormError from './FormError';

const FormContact = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  let [fieldId, setFieldId] = useState("");
  let [isValidInput, setIsValidInput] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");
  let [name, setName] = useState(props?.contact?.name || "");
  let [mob, setMob] = useState(props?.contact?.mob || "");
  let [address, setAddress] = useState(props?.contact?.address || "");
  const handleInput = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "mob":
        setMob(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
    }
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
    let formData = {
      name: data.get('name'),
      mob: data.get('mob'),
      address: data.get('address')
    }
    let isValidForm = true;
    let keys = Object.keys(formData);
    keys.forEach((key) => {
      if (formData[key].length === 0) {
        isValidForm = false;
        return;
      }
    })

    if (!isValidForm) {
      setFieldId("submit");
      setIsValidInput(false);
      setErrorMessage("Please Fill the form Properly")
    } else {
      props.handleSubmit(formData);
      setFieldId("");
      setIsValidInput(true);
      setErrorMessage("")
    }

  };
  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: "500px" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="text"
          id="name"
          autoComplete="current-name"
          onChange={handleInput}
          onBlur={handleValidation}
          InputLabelProps={{ shrink: true }}
          value={name}
        />
        <p className={`text-danger ${fieldId === "name" ? "d-block" : "d-none"}`}>
          <FormError isHidden={isValidInput} errorMessage={errorMessage} />
        </p>
        <TextField
          margin="normal"
          required
          fullWidth
          id="mob"
          label="Mobile Number"
          name="mob"
          autoComplete="mob"
          onChange={handleInput}
          onBlur={handleValidation}
          InputLabelProps={{ shrink: true }}
          value={mob}
        />
        <p className={`text-danger ${fieldId === "mob" ? "d-block" : "d-none"}`}>
          <FormError isHidden={isValidInput} errorMessage={errorMessage} />
        </p>
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="address"
          name="address"
          autoComplete="address"
          onChange={handleInput}
          onBlur={handleValidation}
          InputLabelProps={{ shrink: true }}
          value={address}
        />
        <p className={`text-danger ${fieldId === "address" ? "d-block" : "d-none"}`}>
          <FormError isHidden={isValidInput} errorMessage={errorMessage} />
        </p>
        <p className={`text-danger mb-0 ${fieldId === "submit" ? "d-block" : "d-none"}`}>
          <FormError isHidden={isValidInput} errorMessage={errorMessage} />
        </p>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {props.formTitle}
        </Button>
      </Box>
    </Box>
  )
}

export default FormContact;