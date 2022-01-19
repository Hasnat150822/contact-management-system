const FormError = (props) => {
    if(props.isHidden) return null;
    else return (
        <>{props.errorMessage}</>
    )
}

export default FormError;