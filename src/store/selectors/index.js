//constact selectors
export const allContacts = (state) => state.contactReducer.contacts;
//global selector
export const isSuccess = (state) => state.globalReducer.isSuccess;
export const isAuthenticated = (state) => state.globalReducer.isAuthenticated;