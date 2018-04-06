import {RECEIVED} from "../actionTypes";

const initialState = {
    message: "Welcome in Tok FM"
};

function received(state, action) {
    const {podcasts} = action;

    return {
        ...state,
        podcasts
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVED:
            return received(state, action);
        default:
            return state;
    }
}

export const actions = {
    fetch: () => ({type: RECEIVED})
};