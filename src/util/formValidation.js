export function formValidation(event) {
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let id = event.target.id;
    let value = event.target.value;
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
    return{
      isValidInput:true,
      errorMessage:""
    }
}