import {FETCH_USER_ACCESS} from "../../actions/users";

const initialState = {
    users: [],
}
export const users = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER_ACCESS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}