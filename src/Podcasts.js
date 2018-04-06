import React, {Component} from 'react';
import {actions} from "./reducers/podcasts";
import {connect} from "react-redux";
import logo from './logo.svg';

class Podcasts extends Component {
    render() {
        const {message} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {message}
                </p>
            </div>
        );
    }
}

export default connect(state => state.podcasts, actions)(Podcasts);