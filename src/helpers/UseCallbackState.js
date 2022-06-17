import React, {useEffect, useState} from 'react';

export default function UseCallbackState(initialState) {
    const [state, setState] = useState({val: initialState, callback: null});
    useEffect(() => {
        const {callback} = state;
        callback && callback(state.val);
    }, [state]);

    return [state, setState];
}