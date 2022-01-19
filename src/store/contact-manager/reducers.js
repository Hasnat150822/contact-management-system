import initialState from "./state";

const contactReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ADD_CONTACT":
            return { contact:[...state.contact, action.contact] }
        default:
            return state;
    }
}

export default contactReducer;