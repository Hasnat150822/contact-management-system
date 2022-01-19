const FormError = (props) => {
    if(props.isHidden) return null;
    else return (
        <p>{props.errorMessage}</p>
    )
}

export default FormError;