import axios from 'axios';

const api = axios.create({
    baseURL: 'http://audycje.tokfm.pl',
    headers: {
        Accept: 'application/json'
    }
});

export function search({ term = '', page = 1, limit = 10 }) {
    return api.get('/search', { params: { term, page, limit } });
}

export function fetch() {
    return api.get('/getsch');
}