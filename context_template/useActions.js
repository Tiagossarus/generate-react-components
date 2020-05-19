import { types } from "./";

export const useActions = (state, dispatch) => {
    return {
        example(payload) {
            // console.log('useActions.example', payload);
            dispatch({
                type: types.EXAMPLE,
                payload,
            });
        },
    };
};
