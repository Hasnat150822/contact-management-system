import { useSelector } from "react-redux"
import { allContacts } from "../store/contact-manager/selectors";
import SingleContact from "../components/SingleContact";

const ContactList = () => {
    const contacts = useSelector((state)=>allContacts(state));  
    let items = contacts.map((contact, index)=>{
        return <SingleContact data = {contact} key={index} />
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    )
}

export default ContactList;