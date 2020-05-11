import React, { useEffect, useReducer, createContext, useContext } from 'react';
// import PropTypes from "prop-types";

import {
    useActions,
    reducer,
} from './';

const __ComponentName__Context = createContext(null);

const __ComponentName__Provider = props => {

    const initialState = {
        loading: true,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    useEffect(() => {
        // Log new state when state changes
        console.log('[__ComponentName__] newState:', state)
    }, [state]);

    const value = {
        dispatch,
        actions,
        state,
    };

    return (
        <__ComponentName__.Provider value={value}>{props.children}</__ComponentName__.Provider>
    );
};

const use__ComponentName__Context = () => useContext(__ComponentName__Context);

export { __ComponentName__Provider, use__ComponentName__Context };

// __ComponentName__.defaultProps = {
//     foo: "bar",
// };

// __ComponentName__.propTypes = {
//     foo: PropTypes.string,
// };
