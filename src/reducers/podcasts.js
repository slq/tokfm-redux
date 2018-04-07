import {DOWNLOADED, RECEIVED} from "../actionTypes";
import {download, fetch, getDownloadUrl} from '../api';

const initialState = {
    message: "Welcome in Tok FM",
    podcasts: [],
    downloaded: []
};

function received(state, action) {
    const {podcasts} = action;

    return {
        ...state,
        podcasts
    }
}

function downloaded(state, action) {
    const {podcast} = action;

    return {
        ...state,
        downloaded: [podcast, ...state.downloaded]
    };
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVED:
            return received(state, action);
        case DOWNLOADED:
            return downloaded(state, action);
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
            }),
        download: (podcast) => dispatch =>
            getDownloadUrl(podcast.id).then(resp => {
                download(resp.data.url).then(response => {
                    let fileName = `${podcast.id}_${podcast.time} - ${podcast.series} - ${podcast.name}.mp3`;
                    let blob = new Blob([response.data], {
                        type: "audio/mpeg"
                    });

                    // var objectUrl = URL.createObjectURL(blob);
                    // window.open(objectUrl);

                    let downloadLink = document.createElement("a");
                    downloadLink.href = URL.createObjectURL(blob);
                    downloadLink.download = fileName;
                    downloadLink.target = '_blank';
                    downloadLink.click();

                    dispatch({
                        type: DOWNLOADED,
                        podcast: podcast.id
                    });
                });
            })
    }
;