import React, {Component} from 'react';
import {Podcasts} from './Podcasts'
import logo from './logo.svg';
import {connect} from "react-redux";
import {actions} from "./reducers/podcasts";

function Home(props) {
    const {message} = props;
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                <Podcasts message={message}/>
            </p>
        </div>
    );
}

export default connect(state => state.podcasts, actions)(Home);
