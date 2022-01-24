import states from "../states";
const globalReducer = (state = states.globalState, action) => {
    switch (action.type) {
        case "LOADING_SUCCESS":
            return { ...state, isSuccess: action.isSuccess }
        case "SIGN_IN":
            return { ...state, user:action.user, isAuthenticated:true }
        case "IS_AUTHENTICATED":
            return { ...state, isAuthenticated:action.isAuth }
        case "SIGN_OUT":
            return { ...state, user:null, isAuthenticated:false }
        default:
            return state;
    }
}

export default globalReducer;