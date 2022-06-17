import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './style.css';
import {actionMarker} from "../../store/createActions/actionMarker";
import {FETCH_USER_REQUEST} from "../../store/actions/users";


const Users = () => {
   const {users} = useSelector(state => state.users);
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionMarker(FETCH_USER_REQUEST, {}, (data) => {
            console.log('data', data);
        }));
    }, []);


    return (
        <div className='users'>
            users
        </div>
    )
}
export default Users;