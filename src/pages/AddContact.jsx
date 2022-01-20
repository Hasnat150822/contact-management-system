import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContact from '../components/FormContact';
import {addContact} from '../store/contact-manager/actions';

const AddContact = ({addContact}) => {
    let navigate = useNavigate();
    let handleSubmit = (contact) => {
        addContact(contact);
        navigate("/contacts")
    } 

    return (
        <>
            <h3>Add New Contact</h3>
            <FormContact formTitle="Add Contact" handleSubmit={handleSubmit} />
        </>
    );

}


export default connect(null, { addContact })(AddContact);