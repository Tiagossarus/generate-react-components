import React, { useEffect, useReducer, createContext, useContext } from "react";
// import PropTypes from "prop-types";

import { useActions, reducer } from "./";

const __ComponentName__Context = createContext(null);

const __ComponentName__ContextProvider = props => {
    const initialState = {
        loading: true,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    useEffect(() => {
        // Log new state when state changes
        console.log("[__ComponentName__] newState:", state);
    }, [state]);

    const value = {
        dispatch,
        actions,
        state,
    };

    return (
        <__ComponentName__Context.Provider value={value}>
            {props.children}
        </__ComponentName__Context.Provider>
    );
};

const use__ComponentName__Context = () => useContext(__ComponentName__Context);

export { __ComponentName__ContextProvider, use__ComponentName__Context };

// __ComponentName__ContextProvider.defaultProps = {
//     foo: "bar",
// };

// __ComponentName__ContextProvider.propTypes = {
//     foo: PropTypes.string,
// };
