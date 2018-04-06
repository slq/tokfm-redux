import {LOAD, RECEIVED} from "../actionTypes";
import {fetch} from '../api';

const initialState = {
    message: "Welcome in Tok FM",
    podcasts: []
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
        fetch().then(resp => {
                const podcasts = resp.data.schedule
                    .map(podcast => ({
                        id: podcast.podcast_id,
                        name: podcast.podcast_name,
                        series: podcast.series_name,
                        time: podcast.emission_time
                    }))
                    .sort(
                        (a, b) => b.id - a.id
                    );
                dispatch({type: RECEIVED, podcasts});
            }
        )
};