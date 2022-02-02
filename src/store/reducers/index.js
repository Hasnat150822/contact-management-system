import { combineReducers } from "redux";
import contactReducer from "./contact";
import globalReducer from "./global";
export default combineReducers({
    contactReducer,
    globalReducer
})