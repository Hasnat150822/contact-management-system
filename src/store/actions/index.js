//contact actions
import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, LOADING_SUCCESS, SIGN_IN, SIGN_OUT, IS_AUTHENTICATED } from './types'

export const addContact = (contact) => {
    return {
        type:ADD_CONTACT,
        contact
    }
}

export const updateContact = (contact, id) => {
    return {
        type:UPDATE_CONTACT,
        contact,
        id
    }
}

export const deleteContact = (id) => {
    return {
        type:DELETE_CONTACT,
        id
    }
}
//global actions
export const loadSuccess = (isSuccess) => {
    return {
        type:LOADING_SUCCESS,
        isSuccess
    }
}

export const signIn = (user) => {
    return {
        type:SIGN_IN,
        user
    }
}

export const signOut = () => {
    return {
        type:SIGN_OUT
    }
}

export const isAuthenticated = (isAuth) => {
    return {
        type:IS_AUTHENTICATED,
        isAuth
    }
}
//posts actions