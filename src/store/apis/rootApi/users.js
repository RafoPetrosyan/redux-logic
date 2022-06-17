import { createLogic } from 'redux-logic';
import {FETCH_USER_ACCESS, FETCH_USER_REQUEST} from "../../actions/users";
import {setStateAction} from "../../createActions/setStateAction";

const getUserList = createLogic({
    type: FETCH_USER_REQUEST,
    latest: true,
    async process({ getState, action, ApiClient }, dispatch, done) {
        try {
            const {data: { users }} = await ApiClient.get('user');
            dispatch(setStateAction(FETCH_USER_ACCESS, users));
            action.cb && action.cb('success');
        }catch (e){
            console.log(e)
        }
        done();
    },
});

export const users = [getUserList];
