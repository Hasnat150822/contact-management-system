import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import FormContact from '../components/FormContact';
import {updateContact} from "../store/contact-manager/actions"

const UpdateContact = ({contacts}) => {
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

function matchStatetoProps (state) {
    return {
        contacts:state.contacts
    }
}

export default connect(matchStatetoProps, { updateContact })(UpdateContact);