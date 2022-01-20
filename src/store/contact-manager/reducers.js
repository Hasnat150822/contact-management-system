import initialState from "./state";

const contactReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ADD_CONTACT":
            return { contacts:[...state.contacts, action.contact] }
        case "UPDATE_CONTACT":
            let updateContacts = state.map((contact, index)=>{
                return action.id === index ? action.contact:contact;
            })
            return { ...state, contacts:updateContacts }
        default:
            return state;
    }
}

export default contactReducer;