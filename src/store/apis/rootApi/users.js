import { createLogic } from 'redux-logic';
import {FETCH_USER_ACCESS, FETCH_USER_REQUEST} from "../../actions/users";
import {setStateAction} from "../../createActions/setStateAction";

export const users = createLogic({
    type: FETCH_USER_REQUEST,
    latest: true,
    async process({ getState, action, ApiClient }, dispatch, done) {
        try {
            const {data: { trainers }} = await ApiClient.get('trainer');
            dispatch(setStateAction(FETCH_USER_ACCESS, trainers));
        }catch (e){
            console.log(e)
        }
        done();
    },
});
