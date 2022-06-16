import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './style.css';
import {actionMarker} from "../../store/createActions/actionMarker";
import {FETCH_USER_REQUEST} from "../../store/actions/users";

const Users = () => {
   const {users} = useSelector(state => state.users);
   const dispatch = useDispatch();

    console.log(users)

    useEffect(() => {
        dispatch(actionMarker(FETCH_USER_REQUEST))
    }, []);

    return (
        <div className='users'>
            users
        </div>
    )
}
export default Users;