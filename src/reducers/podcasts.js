import {LOAD, RECEIVED} from "../actionTypes";
import {search} from '../api';

const initialState = {
    message: "Welcome in Tok FM",
    podcasts: [{
        joke: ''
    }]
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
    load: () => dispatch =>
        search({term: 'dad'}).then(resp => {
            console.log('response', resp);
            dispatch({type: RECEIVED, podcasts: resp.data.results});
        }
    )
};