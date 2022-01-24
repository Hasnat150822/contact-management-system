import states from "../states";
const contactReducer = (state = states.contactState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return { contacts: [...state.contacts, action.contact] }
        case "UPDATE_CONTACT":
            let updateContacts = state.contacts.map((contact, index) => {
                return action.id == index ? action.contact : contact;
            })
            return { ...state, contacts: updateContacts }
        case "DELETE_CONTACT":
            let deleteContact = state.contacts.filter((contact, index) => {
                return action.id != index;
            })
            return { ...state, contacts: deleteContact }
        default:
            return state;
    }
}

export default contactReducer;