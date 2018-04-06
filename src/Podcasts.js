import React, {Component} from 'react';

export class Podcasts extends Component {
    render() {
        const {message} = this.props;
        return (
            <span>{message}</span>
        );
    }
}
