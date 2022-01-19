export function formValidation(event) {
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let nameReg = /^[a-zA-Z ]*$/;
    let mobReg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

    let id = event.target.id;
    let value = event.target.value;
    if(value.length === 0){
      return {
        isValidInput:false,
        errorMessage:"This field is required*"
      }
    }
    if(id=="email" && emailReg.exec(value) === null){
      return {
        isValidInput:false,
        errorMessage:"Please type valid email"
      }
    }
    if(id=="password" && passReg.exec(value) === null){
      return {
        isValidInput:false,
        errorMessage:"Password should be like 'Abcd1234'"
      }
    }
    if(id=="name" && nameReg.exec(value) === null){
      return {
        isValidInput:false,
        errorMessage:"Name should be like 'John Deo'"
      }
    }
    if(id=="mob" && mobReg.exec(value) === null){
      return {
        isValidInput:false,
        errorMessage:"Mobile number should be like '+923049248675'"
      }
    }
    return{
      isValidInput:true,
      errorMessage:""
    }
}