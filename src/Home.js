import React from 'react';
import Podcasts from './Podcasts'
import ErrorBoundary from './ErrorBoundary';
import {Route, Router} from "react-router-dom";
import createHistory from "history/createBrowserHistory";


const history = createHistory();

history.listen((location, action) => {
    console.log("History trace", location, action);
});

export function Home() {
    return (
        <ErrorBoundary>
            <Router history={history}>
                <Route exact path="/" component={Podcasts}/>
            </Router>
        </ErrorBoundary>
    );
}