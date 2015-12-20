import React from 'react';

export default class HelloBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Coucou {this.props.name}</p>
    }
}