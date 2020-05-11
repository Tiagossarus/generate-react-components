import { types } from "./";

export default (state = {}, action) => {
    const { type, payload } = action;

    console.log(`[${type}]`, { state, type, payload });

    if (typeof types[type] === undefined) {
        // what are you trying to do!?
        console.error(
            `[reducer] invalid action type: '${type}'`,
            { availableActions: types }
        );
    }

    switch (type) {
        case types.EXAMPLE:
            return {
                ...state,
            };

        default:
            return state;
    }
};
