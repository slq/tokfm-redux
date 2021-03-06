import React, {Component} from 'react';
import {actions} from "./reducers/podcasts";
import {connect} from "react-redux";
import logo from './logo.svg';
import {Podcast} from "./Podcast";
import styled from "styled-components";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PodcastList = styled.div`
  padding: 2rem;
  background-color: lightgray;
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;

class Podcasts extends Component {

    componentWillMount() {
        this.props.load();
    }

    onClick = (podcast) => this.props.download(podcast);

    render() {
        const {message, podcasts, downloaded} = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {message}
                </p>
                <Content>
                    <PodcastList>
                        {podcasts.map(podcast => {
                            let flag = 'false';
                            if(downloaded.find(id => id === podcast.id)) {
                                flag = 'tr';
                            }
                            return <Podcast {...podcast} flag={flag} key={podcast.id} onClick={this.onClick}/>
                        })}
                    </PodcastList>
                </Content>
            </div>
        );
    }
}

export default connect(state => state.podcasts, actions)(Podcasts);