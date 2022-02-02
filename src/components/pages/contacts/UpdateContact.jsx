import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import FormContact from '../../FormContact';
import {updateContact} from "../../../store/actions"

const UpdateContact = ({contacts, updateContact}) => {
    let param = useParams();
    let navigate = useNavigate();
    let handleSubmit = (contact) => {
        updateContact(contact, param.id);
        navigate("/contacts")
    } 
    let contact = contacts[param.id];
    return (
        <>
            <h3>Update Single Contact</h3>
            <FormContact contact={contact} formTitle="Update Contact" handleSubmit={handleSubmit} />
        </>
    );

}

const matchStatetoProps =  (state) => {
    return {
        contacts:state.contactReducer.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateContact : (contact, id) => dispatch(updateContact(contact, id))
    }
}


export default connect(matchStatetoProps, mapDispatchToProps)(UpdateContact);