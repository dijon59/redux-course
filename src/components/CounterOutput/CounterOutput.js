import React, { Component } from 'react';

import './CounterOutput.css';

export default class counterOutput extends Component {
    render() {
        return (
            <div className="CounterOutput">
                Current Counter: {this.props.value}
            </div>
        )
    }
};
