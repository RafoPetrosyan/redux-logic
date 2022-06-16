import {combineReducers} from "redux";
import {users} from "./rootReducer/users";

export const rootReducer = combineReducers({
    users,
});