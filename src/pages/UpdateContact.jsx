import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import FormContact from '../components/FormContact';
import {updateContact} from "../store/contact-manager/actions"

const UpdateContact = ({contacts, updateContact}) => {
    let param = useParams();
    let navigate = useNavigate();
    let handleSubmit = (contact) => {
        // console.log(payload, 'this is payload')
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
        contacts:state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateContact : (contact, id) => dispatch(updateContact(contact, id))
    }
}


export default connect(matchStatetoProps, mapDispatchToProps)(UpdateContact);