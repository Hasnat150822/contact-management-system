export const addContact = (contact) => {
    return {
        type:'ADD_CONTACT',
        contact
    }
}

export const updateContact = (contact, id) => {
    return {
        type:'UPDATE_CONTACT',
        contact,
        id
    }
}
